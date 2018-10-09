const userPlaylistsRouter = require('express').Router()
const db = require('../controllers/userPlaylists.js')

userPlaylistsRouter.route('/:user')
  .get(db.getUserPlaylists)

userPlaylistsRouter.route('/')
  .post(db.newUserPlaylist)

module.exports = userPlaylistsRouter;