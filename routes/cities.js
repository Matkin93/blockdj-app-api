const citiesRouter = require('express').Router()
const db = require('../controllers/cities.js')

citiesRouter.route('/')
  .get(db.getCities)

citiesRouter.route('/:city_id')
  .get(db.getPlaylistsByAreaCoords)

module.exports = citiesRouter