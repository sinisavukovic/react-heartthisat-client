import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPermalink, getSongPermalink, getIsPlaying, getPlayingSongId} from '../selectors/CommonSelector';
import { fetchSong } from '../actions/SongActions';
import { playSong } from '../actions/PlayerActions';
import Song from '../components/Song';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  const { songs, song} = state.song;
  return {
    username: getUserPermalink(match),
    songPermalink: getSongPermalink(match),
    isFetching: state.song.isFetching,
    isPlaying: getIsPlaying(state),
    playingSongId: getPlayingSongId(state),
    songs,
    song
  }
}

export default connect(mapStateToProps, {
  fetchSong,
  playSong
})(SongContainer);