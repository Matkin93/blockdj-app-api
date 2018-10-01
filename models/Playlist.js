const mongoose = require('mongoose')
const { Schema } = mongoose

const PlaylistSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles',
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'areas',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  },
  expires_at: {
    type: Date
  }
})

module.exports = mongoose.model('playlists', PlaylistSchema);