const {Profile} = require('../models/index.js')

exports.newProfile = (req, res, next) => {
  const { body } = req
  Profile.create(body)
  .then((profile) => {
    res.status(201).res.send({profile})
  })
  .catch(next)
}

exports.getProfileById = (req, res, next) => {
  const { id } = req.params
  Profile.findById({id})
  .then((profile) => {
    res.status(200).res.send({profile})
  })
  .catch(next)
}

