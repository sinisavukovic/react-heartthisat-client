import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeedIfNeeded, fetchFeedNext } from '../actions/FeedActions';
import Feed from '../components/Feed';
import { getPlayingSongId, getIsPlaying } from '../selectors/CommonSelector';
import { getIsFetching, getFeedSongs } from '../selectors/FeedSelector';
import { playSong } from '../actions/PlayerActions';

const FeedContainer = props => <Feed {...props} />;

const mapStateToProps = (state) => {
  return { 
    isFetching: getIsFetching(state),
    songs: getFeedSongs(state),
    isPlaying: getIsPlaying(state),
    playingSongId: getPlayingSongId(state),
    feedNextPage: state.feed.page
  }
}

export default connect(mapStateToProps, {
  fetchFeedIfNeeded,
  fetchFeedNext,
  playSong,
})(FeedContainer);
