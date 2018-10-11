const { City, Area, Playlist } = require('../models/index.js');
const inside = require('point-in-polygon');

exports.getCities = (req, res, next) => {
  City.find({}).then((cities) => {
    res.status(200).send({ cities })
  })
    .catch(next)
}

exports.getPlaylistsByAreaCoords = (req, res, next) => {
  const { lat, long } = req.query;
  const { cityId } = req.params;
  const positionArr = [Number(lat), Number(long)];

  Area.find({ city: cityId })
    .then(areas => {
      areas.forEach(area => {
        const polygon = area.bounds.map(coord => [coord.latitude, coord.longitude]);
        if (inside(positionArr, polygon)) {
          Playlist.find({ area: area._id })
            .populate('profile')
            .then(playlists => {
              res.status(200).send({ playlists, area })
            })
        }
      })
    })
    .catch(next)
}
