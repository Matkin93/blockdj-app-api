const citiesRouter = require('express').Router()
const getCities = require('../controllers/cities.js')

citiesRouter.route('/')
  .get(getCities)

module.exports = citiesRouter