const mongoose = require('mongoose')
const util = require('../utils.js')
const { Profile, Area, City, Comment, Playlist, Track, Vote, Winner, UserPlaylist } = require('../models/index.js')

const seedDB = async ({ areas, cities, comments, playlists, profiles, tracks, votes, winners, userPlaylists }) => {

  console.log('Dropping Database...')
  return mongoose.connection.dropDatabase()
    .then(() => {
      return Promise.all(
        [
          Profile.insertMany(profiles),
          City.insertMany(cities)
        ]
      )
    })
    .then(([profileDocs, cityDocs]) => {
      return Promise.all(
        [
          profileDocs,
          cityDocs,
          Area.insertMany(util.formatAreaData(areas, cityDocs)),
          UserPlaylist.insertMany(util.formatUserPlaylistData(userPlaylists, profileDocs)),
          Comment.insertMany(util.formatCommentData(comments, profileDocs))
        ]
      )
    })
    .then(([profileDocs, cityDocs, areaDocs, commentDocs]) => {
      return Promise.all(
        [
          profileDocs,
          cityDocs,
          areaDocs,
          commentDocs,
          Playlist.insertMany(util.formatPlaylistData(playlists, profileDocs, areaDocs))
        ]
      )
    })
    .then(([profileDocs, cityDocs, areaDocs, commentDocs, playlistDocs]) => {
      return Promise.all(
        [
          profileDocs,
          cityDocs,
          areaDocs,
          commentDocs,
          playlistDocs,
          Track.insertMany(util.formatTrackData(tracks, playlistDocs)),
          Vote.insertMany(util.formatVoteData(votes, profileDocs, playlistDocs)),
          Winner.insertMany(util.formatWinnerData(winners, profileDocs, areaDocs, playlistDocs))
        ]
      )
    })
    .catch(console.log)
}

module.exports = seedDB