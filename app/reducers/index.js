import { combineReducers } from 'redux';
import feed from './FeedReducer';
import artist from './ArtistReducer';
import player from './PlayerReducer';
import song from './SongReducer';

const rootReducer = combineReducers({ feed, artist, player, song });

export default rootReducer;
