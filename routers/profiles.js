const profilesRouter = require('express').Router()
const {newProfile, getProfileById} = require('../controllers/profiles.js')

profilesRouter.route('/')
  .post(newProfile)

profilesRouter.route('/:id')
  .get(getProfileById)
module.exports = profilesRouter