const mongoose = require('mongoose')
const { Schema } = mongoose

const ProfileSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
  },
  facebook_url: {
    type: String,
  },
  instagram_url: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
  },
  avatar_url: {
    type: String,
    required: true

  }
})
module.exports = mongoose.model('profiles', ProfileSchema);