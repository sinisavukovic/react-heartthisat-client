import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistSong from './ArtistSong';
import NotFound from './NotFound';

const ArtistSongs = ({
	songs,
	isPlaying,
	playingSongId,
	playSong
}) => {
	if (songs.length === 0) {
		return <NotFound message="User doesn't have any songs." />
	}
	return (
		<div className="profile-song-list">
			{ songs.map((song) => 
				<ArtistSong 
					key={song.id}
					song={song} 
					playSong={playSong}
					isPlaying={isPlaying}
					isActive={playingSongId === song.id} 
				/>
			)}
		</div>			
	)
}

ArtistSongs.propTypes = {
	songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	playSong: PropTypes.func.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playingSongId: PropTypes.string,
};

export default ArtistSongs;