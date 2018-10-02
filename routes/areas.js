const areasRouter = require('express').Router()
const { getAreas, getAreaByCordinates } = require('../controllers/areas.js')

areasRouter.route('/')
  .get(getAreas)
  
//Pass longitude & latitude	as query to this endpoint
//avoid confiflct with endpoint above
areasRouter.route('/area')
  get(getAreaByCordinates)

module.exports = areasRouter