const pageCount = 20;
export const API_HOSTNAME = 'https://api-v2.hearthis.at';
export const MOST_POPULAR = `${API_HOSTNAME}/feed/?type=popular&page=:page&count=${pageCount}`;
export const USER_PROFILE = `${API_HOSTNAME}/:username/`;
export const USER_TRACKS = `${API_HOSTNAME}/:username/?type=tracks&count=:count&:page=:page`;
export const SINGLE_SONG = `${API_HOSTNAME}/:username/:song/`;
