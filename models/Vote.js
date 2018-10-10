const mongoose = require('mongoose')
const { Schema } = mongoose

const VoteSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles',
    required: true
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'playlists',
    required: true
  },
  vote: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('votes', VoteSchema)