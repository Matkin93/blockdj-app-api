const winnersRouter = require('express').Router()
const areaWinner = require('../controllers/winners.js')

winnersRouter.route('/:area_id')
  .get(areaWinner)
  
module.exports = winnersRouter