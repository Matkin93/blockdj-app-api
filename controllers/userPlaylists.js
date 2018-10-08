const { UserPlaylist } = require('../models/index.js')


exports.newUserPlaylist = (req, res, next) => {
  const { body } = req;
  UserPlaylist.create(body)
    .then((playlist) => {
      res.status(201).res.send({ playlist })
    })
    .catch(next)
}