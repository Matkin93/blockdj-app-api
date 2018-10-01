const mongoose = require('mongoose');
const { Schema } = mongoose;

const WinnerSchema = new Schema({
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
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plsylists',
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
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('winners', WinnerSchema);