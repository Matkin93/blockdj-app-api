const playlistsRouter = require('express').Router()
const { newPlaylist, getPlaylistById, getTracksForPlaylist, addTrackToPlaylist, getPlaylistComments, addCommentToPlaylist } = require('../controllers/playlists.js')

playlistsRouter.route('/')
  .post(newPlaylist)

playlistsRouter.route('/:playlist_id')
  .get(getPlaylistById)

playlistsRouter.route('/:playlist_id/tracks')
  .get(getTracksForPlaylist)
  .post(addTrackToPlaylist)

playlistsRouter.route('/:playlist_id/comments')
  .get(getPlaylistComments)
  .post(addCommentToPlaylist)

playlistsRouter.route('/:playlist_id/vote?direction')
  .patch(voteOnPlaylist)
module.exports = playlistsRouter