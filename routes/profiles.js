const profilesRouter = require('express').Router()
const db = require('../controllers/profiles.js')

profilesRouter.route('/')
  .post(db.newProfile)

profilesRouter.route('/:id')
  .get(db.getProfileById)
module.exports = profilesRouter