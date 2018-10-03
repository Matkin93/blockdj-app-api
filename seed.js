const {DB_URL} = require('./config/config.js')
const mongoose = require('mongoose')
const { Profile, Area, City, Comment, Playlist, Track, Vote, Winner } = require('./models/index.js')
const mock = require('./mock.js')


mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
  console.log(`connected to ${DB_URL}`)
  console.log('Dropping Database...')
  return mongoose.connection.dropDatabase();
})
.then(() => {
  const profiles = Array.from({length: 20}, mock.createProfile)
  const cities = Array.from({length: 10}, mock.createCity)
  return Promise.all(
    [
      Profile.insertMany(profiles),
      City.insertMany(cities)
    ]
  ) 
})
.then(() => {
  const areas = Array.from({length: 10}, mock.createArea)
  const comments = Array.from({length: 30}, mock.createCommment)
  return Promise.all(
    [
      Area.insertMany(areas),
      Comment.insertMany(comments)
    ]
  )
})
.then(() => {
  const playlists = Array.from({length: 10}, mock.createPlaylist)
  return Playlist.insertMany(playlists)
})
.then(() => {
  const tracks = Array.from({length: 20}, mock.createTrack)
  const votes = Array.from({length: 50}, mock.createVote)
  const winners = Array.from({length: 5}, mock.createWinner)
  return Promise(
    [
      Track.insertMany(tracks),
      Vote.insertMany(votes),
      Winnner.insertMany(winners)

    ]
  )
})
.then(() => {
  mongoose.disconnect()
  console.log(`disconnected from ${DB_URL}`)
})
.catch(console.error)