const { City } = require('../models/index.js')

exports.getCities = (req, res, next) => {
  City.find({}).then((cities) => {
    res.status(200).send({ cities })
  })
    .catch(next)
}

