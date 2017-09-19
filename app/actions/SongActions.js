import * as types from '../constants/ActionTypes';
import callApi from '../utils/ApiUtils';
import { SINGLE_SONG, USER_TRACKS } from '../constants/ApiConstants';

export const fetchSongRequest = () => ({
  type: types.FETCH_SONG_REQUEST,
});

export const fetchSongSuccess = (song, songs) => ({
  type: types.FETCH_SONG_SUCCESS,
  song,
  songs,
});

export const fetchSong = (username, songPermalink) => async(dispatch) => {
  dispatch(fetchSongRequest());

  const { json: song } = await callApi(SINGLE_SONG.replace(':username', username).replace(':song', songPermalink));
  const { json: songs } = await callApi(USER_TRACKS.replace(':username', username).replace(':count', 10).replace(':page', 1));
  dispatch(fetchSongSuccess(song, songs));
};
