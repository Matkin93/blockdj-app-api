const playlistsRouter = require('express').Router()
const db = require('../controllers/playlists.js')

playlistsRouter.route('/')
  .post(db.newPlaylist)

playlistsRouter.route('/area_id')
  .get(db.getPlaylistsInArea)

playlistsRouter.route('/:cityId')
  .get(db.getPlaylistsByAreaCoords)

playlistsRouter.route('/:playlist_id')
  .get(db.getPlaylistById)

playlistsRouter.route('/:playlist_id/tracks')
  .get(db.getTracksForPlaylist)
  .post(db.addTrackToPlaylist)

playlistsRouter.route('/:playlist_id/comments')
  .get(db.getPlaylistComments)
  .post(db.addCommentToPlaylist)

playlistsRouter.route('/:playlist_id/votes')
  .patch(db.voteOnPlaylist)




module.exports = playlistsRouter