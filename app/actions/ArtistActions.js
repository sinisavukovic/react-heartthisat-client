import * as types from '../constants/ActionTypes';
import callApi from '../utils/ApiUtils';
import { USER_PROFILE, USER_TRACKS } from '../constants/ApiConstants';

export const fetchArtistRequest = () => ({
  type: types.FETCH_ARTIST_REQUEST,
});

export const fetchArtistSuccess = (songs, profile) => ({
  type: types.FETCH_ARTIST_SUCCESS,
  songs,
  profile,
});

export const fetchArtist = username => async (dispatch) => {
  dispatch(fetchArtistRequest());

  const { json: profile } = await callApi(USER_PROFILE.replace(':username', username));
  const { json: songs } = await callApi(USER_TRACKS.replace(':username', username).replace(':count', 10).replace(':page', 1));

  dispatch(fetchArtistSuccess(songs, profile));
};
