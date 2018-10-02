const newPlaylist = (req, res, next) => {
  console.log('MAKING NEW PLAYLIST')
}
const getPlaylistById = (req, res, next) => {
  console.log('RETIEVEINNG PLAYLIST')
}
const getTracksForPlaylist = (req, res, next) => {
  console.log('RETIEVING TRACKS FOR PLAYLIST')
}
const addTrackToPlaylist = (req, res, next) => {
  console.log('ADD TRACK TO PLAYLIST')
}
const getPlaylistComments = (req, res, next) => {
  console.log('GET COMMENTS FOR PLAYLIST')
}
const addCommentToPlaylist = (req, res, next) => {
  console.log('MAKE COMMENT ON PLAYLIST')
}
const voteOnPlaylist = (req, res, next) => {
  console.log('VOTE ON PLAYLIST')
}

module.exports = { newPlaylist, getPlaylistById, getTracksForPlaylist, addTrackToPlaylist, getPlaylistComments, addCommentToPlaylist, voteOnPlaylist }