const { Playlist, Track, Comment, Vote } = require('../models/index.js')


exports.newPlaylist = (req, res, next) => {
  const { body } = req;
  Playlist.create(body)
  .then((playlist) => {
    res.status(201).res.send({playlist})
  })
  .catch(next)
}

exports.getPlaylistById = (req, res, next) => {
  const { id } = req.params;
  Playlist.findById({id})
  .then((playlist) => {
    res.status(200).res.send({playlist});
  })
  .catch(next)
}

exports.getTracksForPlaylist = (req, res, next) => {
  const { playlist_id } = req.params;
  Track.find({playlist: playlist_id})
  .then((tracks) => {
    res.status(200).res.send({tracks})
  })
  .catch(next)

  
}

exports.addTrackToPlaylist = (req, res, next) => {
  const { playlist_id } = req.params;
  Track.create({playlist: playlist_id})
  .then((track) => {
    res.status(201).res.send({track})
  })
  .catch(next)
}
exports.getPlaylistComments = (req, res, next) => {
  const { playlist_id } = req.params
  Comment.find({playlist: playlist_id})
  .then((comments) => {
    res.status(200).res.send({comments})
  })
  .catch(next)
}
exports.addCommentToPlaylist = (req, res, next) => {
  const { playlist_id } = req.params
  const { body } = req
  Comment.create({playlist: playlist_id})
  .then((comment) => {
    res.status(201).res.send({comment})
  })
  .catch(next)
}
exports.voteOnPlaylist = (req, res, next) => {
  const { playlist_id } = req.params
  Vote.create({playlist: playlist_id})
  then((vote) => {
    res.status(200).res.send({vote})
  })
  .catch(next)
}

