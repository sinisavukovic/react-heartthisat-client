import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  songs: [],
  profile: {},
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        songs: [...new Set(action.songs)],
        profile: action.profile,
      };
    case types.UPDATE_ARTIST_SONGS:
      return {
        ...state,
        isFetching: false,
        songs: [...new Set([...state.songs, ...action.songs])],
        profile: action.profile,
      };

    default:
      return state;
  }
}
