import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import SongProfile from './SongProfile';
import ArtistSongs from './ArtistSongs';

class Song extends Component {
  componentWillMount() {
    const { fetchSong, username, songPermalink } = this.props;
    fetchSong(username, songPermalink);
  }

  render() {
    const { isFetching, song, songs, playSong, isPlaying, playingSongId } = this.props;

    if (!song) {
			return <NotFound message="Artist not found" />
		}

    return (
      <div>
        <Loader className="loader-full" isLoading={isFetching} />
        {
          !isFetching ?
            <div className="wrapper">
              <SongProfile profile={song} />
              <h2>More Tracks from this user </h2>
              <ArtistSongs 
								songs={songs} 
								playSong={playSong}
								isPlaying={isPlaying}
								playingSongId={playingSongId} 
							/>
            </div>
            : null
        }
      </div>
    )
  }
}

Song.propTypes = {
	fetchSong: PropTypes.func.isRequired,
	playSong: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,	
	songPermalink: PropTypes.string.isRequired,	
	isFetching: PropTypes.bool.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playingSongId: PropTypes.string,	
	songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	song: PropTypes.shape({}),	
}

export default Song;