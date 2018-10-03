const { City } = require('../models/index.js')

exports.getCities = (req, res, next) => {
  console.log('RETRIEVE LIST OF CITIES')
  City.find({}).then((cities) => {
    res.status(200).res.send({cities})
  })
  .catch(next)
}

