
import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  page: null,
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FEED_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_FEED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...new Set([...state.items, ...action.items])],
        page: action.page,
      };

    default:
      return state;
  }
}
