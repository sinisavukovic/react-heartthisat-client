import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../actions/ArtistActions';
import { playSong } from '../actions/PlayerActions';
import Artist from '../components/Artist';
import { getUserPermalink, getIsPlaying, getPlayingSongId} from '../selectors/CommonSelector';
import { getIsFetching, getArtistSongs, getArtistProfile } from '../selectors/ArtistSelector';

const ArtistContainer = props => <Artist {...props} />;

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  
  return {
    username: getUserPermalink(match),
    isFetching: getIsFetching(state),
    songs: getArtistSongs(state),
    profile: getArtistProfile(state),
    isPlaying: getIsPlaying(state),
    playingSongId: getPlayingSongId(state)
  }
}

export default connect(mapStateToProps, {
  fetchArtist,
  playSong
})(ArtistContainer);
