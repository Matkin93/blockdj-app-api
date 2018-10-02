const mongoose = require('mongoose')
const { Schema } = mongoose

  //I think this is needed to work the bounds proprety, in area schema
  const polygonSchema = new Schema({
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]], // Array of arrays of arrays of numbers
      required: true
    }
  });
  
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


module.exports = mongoose.model('areas', AreaSchema);