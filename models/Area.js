const mongoose = require('mongoose')
const { Schema } = mongoose

const AreaSchema = new Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cities',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  details: {
    type: String,
  },
  image_url: {
    type: String,
  },
  bounds: {
    //Not sure if this is correct, need to go over this with someone. 
    type: polygonSchema,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }  
});

module.exports = mongoose.model('cities', AreaSchema);