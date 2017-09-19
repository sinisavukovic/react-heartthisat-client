import * as types from '../constants/ActionTypes';

const initialState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  song: {},
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case types.ON_LOAD_START:
      return {
        ...state,
        currentTime: 0,
        duration: 0,
      };

    case types.ON_LOADED_METADATA:
      return {
        ...state,
        duration: action.duration,
      };

    case types.ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.currentTime,
      };

    case types.ON_PAUSE:
      return {
        ...state,
        isPlaying: false,
      };

    case types.ON_PLAY:
      return {
        ...state,
        isPlaying: true,
      };

    case types.PLAY_SONG:
      return {
        ...state,
        song: action.song,
      };

    default:
      return state;
  }
}

