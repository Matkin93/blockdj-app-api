const areasRouter = require('express').Router()
const db = require('../controllers/areas.js')

areasRouter.route('/')
  .get(db.getAreas)

areasRouter.route('/:city_id')
  .get(db.getAreasByCity)

areasRouter.route('/city/:coords')
  .get(db.getAreasByCityCoordinates)


module.exports = areasRouter