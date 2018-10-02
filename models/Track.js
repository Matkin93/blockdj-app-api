const mongoose = require('mongoose')
const { Schema } = mongoose

const TrackSchema = new Schema({
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'playlists',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  album: {
    type: String
  },
  artwork_url: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
})

module.exports = mongoose.model('tracks', TrackSchema)