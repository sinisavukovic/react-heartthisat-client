import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Artwork from './Artwork';

class ArtistSong extends Component {
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
		const { user } = song;

		return(
			<div className="profile-song-item">
			<div className="profile-song-item-img">
				<Artwork artworkUrl={song.artwork_url} size="small" isActive={isActive}>
					<div onClick={isActive ? this.togglePlay : this.playSong} className={`profile-song-button-icon icon-${isPlaying && isActive ? 'pause' : 'play'}`} />
				</Artwork>
			</div>
			<div className="profile-song-item-info">
				<div className="profile-song-item-title">{song.title}</div>
				<div className="profile-song-item-info-extra">
					<div className="profile-song-item-user">
						<div className="profile-song-item-user-img">
							<img src={user.avatar_url} alt="User profile picture" />
						</div>
						<Link to={`/${user.permalink}`} className="profile-song-item-user-username">
							{user.username}
						</Link>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

ArtistSong.propTypes = {
	song: PropTypes.shape({}),
	isActive: PropTypes.bool.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playSong: PropTypes.func.isRequired,
};

export default ArtistSong;