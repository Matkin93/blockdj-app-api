const apiRouter = require('express').Router()
const playlistsRouter = require('./playlists.js')
const profilesRouter = require('./profiles.js')
//const citiesRouter = require('./cities.js')
const areasRouter = require('./areas.js')
//const winnersRouter = require('./winners.js')


apiRouter.route('/test')
	.get((req, res, next) => {
		res.status(200).send('I am authed and loving it');
	})


apiRouter.use('/areas', areasRouter)
apiRouter.use('/playlists', playlistsRouter)
//apiRouter.use('/cities', citiesRouter)
//apiRouter.use('/winners', winnersRouter)
apiRouter.use('/profiles', profilesRouter)
//apiRouter.use('/spotify')

module.exports = apiRouter