const userPlaylistsRouter = require('express').Router()
const db = require('../controllers/userPlaylists.js')

userPlaylistsRouter.route('/')
  .post(db.newUserPlaylist)

module.exports = userPlaylistsRouter