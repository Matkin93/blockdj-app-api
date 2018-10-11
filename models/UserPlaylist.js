const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserPlaylistSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tracks: {
    type: [
      {
        title: String,
        artist: String,
        album: String
      }
    ]
  },
  playlist_url: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('userPlaylists', UserPlaylistSchema);