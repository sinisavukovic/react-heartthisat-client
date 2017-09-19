import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from './Slider';

class Player extends Component {
	constructor() {
		super();
		this.audioElement = null;
	}

	componentDidUpdate = (prevProps) => {
		const { audioElement } = this;
		const { stream_url } = this.props.player.song;
		if (prevProps.player.song.stream_url !== stream_url) {
			audioElement.play();
		}
	}

	onLoadedMetadata = () => {
		const { audioElement, props } = this;
		const { onLoadedMetadata } = props;
		onLoadedMetadata(Math.floor(audioElement.duration));
	}

	onPlay = () => {
		const { onPlay } = this.props;
		onPlay();
	}

	onPause = () => {
		const { onPause } = this.props;
		onPause();
	}

	onTimeUpdate = () => {
		const { audioElement, props } = this;
		const { onTimeUpdate } = props;
		onTimeUpdate(Math.floor(audioElement.currentTime));
	}

	changeCurrentTime = (currentTime) => {
		this.audioElement.currentTime = currentTime;
	}

	togglePlay = () => {
		const { audioElement } = this;
		if (audioElement.paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	}

	padZero = (num, size) => {
		let s = String(num);
		while (s.length < size) {
			s = `0${s}`;
		}
		return s;
	};

	formatSeconds = (num) => {
		const minutes = this.padZero(Math.floor(num / 60), 2);
		const seconds = this.padZero(num % 60, 2);
		return `${minutes}:${seconds}`;
	};


	render() {
		const { currentTime, duration, isPlaying, song } = this.props.player;
		const { artwork_url, stream_url, user, title } = song;
		
		if (!song.hasOwnProperty('title')) return null; 
		
		const { username, permalink, id } = user;

		return (
			<div>
				<audio
            id="audio"
            onEnded={this.onEnded}
            onLoadedMetadata={this.onLoadedMetadata}
            onLoadStart={this.onLoadStart}
            onPause={this.onPause}
            onPlay={this.onPlay}
            onTimeUpdate={this.onTimeUpdate}
            ref={(node) => { this.audioElement = node; }}
            src={stream_url}
          />

				<div className="player">
					<div className="player-inner">
						<div className="player-section player-section-song">
							<div className="player-song">
								<img className="player-song-artwork" src={artwork_url} />
								<div className="player-song-main">
									<Link
										className="player-song-title"
										to={`/${permalink}/${song.id}`}
										key={song.id}
									>
										{title}
									</Link>
									<Link
										className="player-song-username"
										to={`/${permalink}`}
										key={{ id: id }}
									>
										{username}
									</Link>
								</div>
							</div>
						</div>
						<div className="player-section">
							<div className="player-buttons">
								<div
									className="player-button"
									onClick={this.togglePlay}
									role="button"
									tabIndex="0"
								>
									<i className={`player-button-icon icon-${isPlaying ? 'pause' : 'play'}`} />
								</div>
							</div>
						</div>
						<div className="player-section player-section-seek">
							<Slider
								max={duration}
								onChange={this.changeCurrentTime}
								value={currentTime}
							/>
						</div>
						<div className="player-section player-section-time">
							<div className="player-time">
								{this.formatSeconds(currentTime)}
								<div className="player-time-separator"> / </div>
								{this.formatSeconds(duration)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Player.propTypes = {
	player: PropTypes.shape({}).isRequired,
	onPause: PropTypes.func.isRequired,
	onPlay: PropTypes.func.isRequired,
	onLoadedMetadata: PropTypes.func.isRequired,
	playSong: PropTypes.func.isRequired,
	onTimeUpdate: PropTypes.func.isRequired
}

export default Player;
