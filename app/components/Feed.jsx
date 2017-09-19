import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import SongGridList from './SongsGridList';
import InfiniteScroll from './InfiniteScroll';

class Feed extends Component {
  componentWillMount() {
    const { fetchFeedIfNeeded } = this.props;
    fetchFeedIfNeeded();
  }

  render() {
		const { isFetching, isPlaying, songs, playSong, playingSongId, fetchFeedNext, feedNextPage } = this.props;
    
    return (
      <div className="wrapper">  
        <InfiniteScroll args={[feedNextPage]} onScroll={fetchFeedNext}>
          <SongGridList 
            songs={songs}
            playSong={playSong} 
            isPlaying={isPlaying}
            playingSongId={playingSongId} 
          />      
        </InfiniteScroll>  
				<Loader className="loader-full" isLoading={isFetching} />
			</div>
    )
  };
};

Feed.propTypes = {
  fetchFeedIfNeeded: PropTypes.func.isRequired,
  fetchFeedNext: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playingSongId: PropTypes.string
};

export default Feed;