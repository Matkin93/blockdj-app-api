const { Area, City } = require('../models/index.js');
const inside = require('point-in-polygon')


exports.getAreas = (req, res, next) => {
  return Area.find({})
    .then((areas) => {
      res.status(200).send({ areas })
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

exports.getAreasByCityCoordinates = (req, res, next) => {
  const positionArr = req.params.coords.split('&');
  City.find({})
    .then(cities => {
      cities.forEach(city => {
        const polygon = city.coordinates.map(coord => [coord.latitude, coord.longitude]);
        if (inside(positionArr, polygon)) {
          Area.find({ city: city._id })
            .then(areas => {
              res.status(200).send({ areas, city })
            })
        }
      })
    })
}

