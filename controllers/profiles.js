const { Profile } = require('../models/index.js')

exports.newProfile = (req, res, next) => {
  const { body } = req
  Profile.create(body)
    .then((profile) => {
      res.status(201).send({ profile })
    })
}

exports.getProfileByUsername = (req, res, next) => {
  const { username } = req.params;
  Profile.find({ username: username })
    .then((profile) => {
      res.status(200).send({ profile })
    })
}

