const userPlaylistsRouter = require('express').Router()
const db = require('../controllers/userPlaylists.js')

userPlaylistsRouter.route('/:user')
  .get(db.getUserPlaylists)
  .post(db.newUserPlaylist)

module.exports = userPlaylistsRouter;