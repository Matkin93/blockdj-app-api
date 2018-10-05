const areasRouter = require('express').Router()
const db = require('../controllers/areas.js')

areasRouter.route('/')
  .get(db.getAreas)
  
//Pass longitude & latitude	as query to this endpoint
//avoid confiflct with endpoint above
areasRouter.route('/:city_id')
  .get(db.getAreasByCity)



module.exports = areasRouter