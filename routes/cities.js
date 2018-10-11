const citiesRouter = require('express').Router()
const db = require('../controllers/cities.js')

citiesRouter.route('/')
  .get(db.getCities)

citiesRouter.route('/:cityId')
  .get(db.getPlaylistsByAreaCoords)

module.exports = citiesRouter