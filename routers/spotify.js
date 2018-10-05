const spotifyRouter = require('express').Router()
const {getAccessToken} = require('../controllers/spotify.js')

spotifyRouter.route('/')
  get(getAccessToken)

module.exports = { spotifyRouter }