const { Area } = require('../models/index.js')


exports.getAreas = (req, res, next) => {
  
  return Area.find({})
    .then((areas) => {
      res.status(200).send({areas})
    })
    .catch(next)
}

exports.getAreasByCity = (req, res, next) => {
  const {city_id} = req.params
  Area.find({city: city_id})
  .then((cityAreas) => {
    console.log(cityAreas)
    if (!cityAreas.length) throw {status:404, msg:'City not found'}
    res.status(200).send({cityAreas})
  })
  .catch(next)
}

