import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  songs: [],
  song: {},
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONG_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_SONG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        songs: [...new Set(action.songs)],
        song: action.song,
      };
    default:
      return state;
  }
}
