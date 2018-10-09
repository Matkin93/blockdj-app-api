const apiRouter = require('express').Router()
const playlistsRouter = require('./playlists.js')
const profilesRouter = require('./profiles.js')
const citiesRouter = require('./cities.js')
const areasRouter = require('./areas.js')
const winnersRouter = require('./winners.js')
const userPlaylistsRouter = require('./userPlaylist')



apiRouter.use('/areas', areasRouter)
apiRouter.use('/playlists', playlistsRouter)
apiRouter.use('/cities', citiesRouter)
apiRouter.use('/winners', winnersRouter)
apiRouter.use('/profiles', profilesRouter)
apiRouter.use('/user-playlists', userPlaylistsRouter)

module.exports = apiRouter