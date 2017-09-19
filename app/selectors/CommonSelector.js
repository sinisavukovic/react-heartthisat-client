
export const getUserPermalink = match => match.params.username;
export const getSongPermalink = match => match.params.song;
export const getPlayingSongId = state => state.player.song.id;
export const getIsPlaying = state => state.player.isPlaying;
