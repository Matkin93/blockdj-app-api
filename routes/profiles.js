const profilesRouter = require('express').Router()
const db = require('../controllers/profiles.js')

profilesRouter.route('/')
  .post(db.newProfile)

profilesRouter.route('/:username')
  .get(db.getProfileByUsername)
module.exports = profilesRouter