import PropTypes from 'prop-types';
import React from 'react';
import SongCard from './SongCard';

const SongsGridList = ({
	songs,
	playSong,
	playingSongId,
	isPlaying
}) => {
	return (
		<div className="song-list">
			{songs.map((song) => 
				<SongCard 
					key={song.id} 
					song={song} 
					isActive={song.id === playingSongId}
					isPlaying={isPlaying}
					playSong={playSong}
				/>) 
			}
		</div>
	)
}

SongsGridList.propTypes = {
	songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	playSong: PropTypes.func.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playingSongId: PropTypes.string,
};

export default SongsGridList;

