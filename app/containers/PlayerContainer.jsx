import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { onPause, onPlay, playSong, onTimeUpdate, onLoadedMetadata } from '../actions/PlayerActions';

const PlayerContainer = props => <Player {...props} />;

const mapStateToProps = (state) => {
	const { player } = state;
	return { player }
}

export default connect(mapStateToProps, {
	onPause,
	onPlay,
	onLoadedMetadata,
	playSong,
	onTimeUpdate
})(PlayerContainer);