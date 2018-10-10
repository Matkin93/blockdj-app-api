const citiesRouter = require('express').Router()
const db = require('../controllers/cities.js')

citiesRouter.route('/')
  .get(db.getCities)

citiesRouter.route('/:cityid')
  .get(db.getPlaylistsByAreaCoords)

module.exports = citiesRouter