import * as types from '../constants/ActionTypes';

export const onLoadedMetadata = duration => ({
  type: types.ON_LOADED_METADATA,
  duration,
});

export const onTimeUpdate = currentTime => ({
  type: types.ON_TIME_UPDATE,
  currentTime,
});

export const onPause = () => ({
  type: types.ON_PAUSE,
});

export const onPlay = () => ({
  type: types.ON_PLAY,
});

export const playSong = song => ({
  type: types.PLAY_SONG,
  song,
});
