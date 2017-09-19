import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import ArtistProfile from './ArtistProfile';
import ArtistSongs from './ArtistSongs';
import NotFound from './NotFound';

class Artist extends Component {
	componentWillMount() {
    const { fetchArtist, username } = this.props;
    fetchArtist(username);
  }

	render() {
		const { profile, songs, isFetching, isPlaying, playingSongId, playSong } = this.props;
		if (!profile) {
			return <NotFound message="Artist not found" />
		}
		return (
			<div>
				<Loader className="loader-full" isLoading={isFetching} />
				{
					!isFetching ? 
						<div className="wrapper">
							<ArtistProfile 
								profile={profile} 
							/>
							<h2>Last 10 songs</h2>
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

Artist.propTypes = {
	fetchArtist: PropTypes.func.isRequired,
	playSong: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,	
	isFetching: PropTypes.bool.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	playingSongId: PropTypes.string,	
	songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	profile: PropTypes.shape({}),	
}

export default Artist;