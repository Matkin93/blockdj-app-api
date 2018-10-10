const mongoose = require('mongoose')
const { Schema } = mongoose

const AreaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cities',
    required: true
  },
  areaColor: {
    type: String
  },
  image_url: {
    type: String,
  },
  bounds: {
    type: [
      { latitude: Number, longitude: Number }
    ],
    required: true
  },
  markerLocation: {
    type: {
      latitude: Number, longitude: Number
    }
  },
  description: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('areas', AreaSchema);