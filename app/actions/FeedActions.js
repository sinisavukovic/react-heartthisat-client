import * as types from '../constants/ActionTypes';
import callApi from '../utils/ApiUtils';
import { MOST_POPULAR } from '../constants/ApiConstants';
import { getIsFetching, getPage, getFeedSongs } from '../selectors/FeedSelector';

export const fetchFeedRequest = () => ({
  type: types.FETCH_FEED_REQUEST,
});

export const fetchFeedSuccess = (items, page) => ({
  type: types.FETCH_FEED_SUCCESS,
  items,
  page,
});

export const fetchFeed = (page = 1) => async (dispatch) => {
  dispatch(fetchFeedRequest());
  let nextPage = null;

  const { json } = await callApi(MOST_POPULAR.replace(':page', page));
  if (json) {
    nextPage = page + 1;
  }

  dispatch(fetchFeedSuccess(json, nextPage));
};

export const fetchFeedNext = page => async (dispatch, getState) => {
  const state = getState();

  if (!getIsFetching(state) && getPage(state)) {
    dispatch(fetchFeed(page));
  }
};

export const fetchFeedIfNeeded = page => async (dispatch, getState) => {
  const state = getState();
  const feed = getFeedSongs(state);

  if (feed.length === 0 && !getIsFetching(state)) {
    dispatch(fetchFeed(page));
  }
};
