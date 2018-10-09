const { UserPlaylist, Profile } = require('../models/index.js')

exports.getUserPlaylists = (req, res, next) => {
  const { user } = req.params;
  Profile.find({ username: user })
    .then(profileDoc => {
      UserPlaylist.find({ profile: profileDoc[0]._id })
        .then((playlists) => {
          res.status(200).send({ playlists })
        })
        .catch(next)
    })

}

exports.newUserPlaylist = (req, res, next) => {
  const { body } = req;
  // console.log(body)
  UserPlaylist.create(body)
    .then((playlist) => {
      res.status(201).send({ playlist })
    })
    .catch(console.log)
}