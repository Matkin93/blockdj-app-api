const citiesRouter = require('express').Router()
const db = require('../controllers/cities.js')

citiesRouter.route('/')
  .get(db.getCities)

module.exports = citiesRouter