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
  colour: {
    type: String
  },
  image_url: {
    type: String,
  },
  bounds: {
    type: [
      {latitude: Number, longitude: Number}
    ],
    // required: true

  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }  
});


module.exports = mongoose.model('areas', AreaSchema);