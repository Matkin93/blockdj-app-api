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
  direction: {
   /* not sure we need to store the direction */
  },
  votes: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('votes', VoteSchema)