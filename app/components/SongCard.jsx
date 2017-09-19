import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artwork from './Artwork';
import { Link } from 'react-router-dom';

class SongCard extends Component {
	
	playSong = () => {
		const { playSong, song } = this.props;
		playSong(song)
	}

	togglePlay = () => {
    const { isPlaying } = this.props;
    const audioElement = document.getElementById('audio');

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  }

	render() {
		const { song, isActive, isPlaying } = this.props;
		const { permalink, user } = song;
		const { username, permalink: userPermalink } = user;

		return (
			<div className="song-card">
				<Artwork artworkUrl={song.artwork_url} size="large" isActive={isActive}>
					<div onClick={isActive ? this.togglePlay : this.playSong} className={`song-card-button-icon icon-${isActive && isPlaying ? 'pause' : 'play'}`} />
				</Artwork>
				<div className="song-card-info">
					<Link to={`${userPermalink}/${permalink}`}>
						<b>{song.title}</b>
					</Link>
					<em>
						by&nbsp; 
						<Link to={userPermalink}>
							<i>{username}</i>
						</Link>
					</em>
				</div>
			</div>
		)
	}
}

SongCard.propTypes = {
	song: PropTypes.shape({}),
	isActive: PropTypes.bool.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playSong: PropTypes.func.isRequired,
}

export default SongCard;