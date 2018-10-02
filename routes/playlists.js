const playlistsRouter = require('express').Router()
const { newPlaylist, getPlaylistById, getTracksForPlaylist, addTrackToPlaylist, getPlaylistComments, addCommentToPlaylist } = require('../controllers/playlists.js')

playlistsRouter.route('/')
  .post(newPlaylist)

playlistsRouter.route('/:playlist_id')
  .post(getPlaylistById)

playlistsRouter.route('/:playlist_id/tracks')
  .get(getTracksForPlaylist)
  .post(addTrackToPlaylist)

playlistsRouter.route('/:playlist/comments')
  .get(getPlaylistComments)
  .post(addCommentToPlaylist)

playlistsRouter.route('/:playlist_id/vote?direction')
  .post(voteOnPlaylist)
module.exports = playlistsRouter