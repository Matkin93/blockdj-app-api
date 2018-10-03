const { Area } = require('../models/index.js')


module.exports.getAreas = (req, res, next) => {
  Area.find({})
    .then((areas) => {
      res.status(200).res.send({areas})
    })
    .catch(next)
}

module.exports.getAreasByCity = (req, res, next) => {
  const {city_id} = req.params
  Area.find({city: city_id})
  .then((cityAreas) => {
    res.status(200).res.send({cityAreas})
  })
  .catch(next)
}

