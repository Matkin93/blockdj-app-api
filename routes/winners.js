const winnersRouter = require('express').Router()
const db = require('../controllers/winners.js')

winnersRouter.route('/:area_id')
  .get(db.areaWinner)
  
module.exports = winnersRouter