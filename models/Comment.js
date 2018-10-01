const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles',
    required: true
  },
  body: {
    type: String,
    required = true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

module.exports = mongoose.model('comments', CommentSchema);