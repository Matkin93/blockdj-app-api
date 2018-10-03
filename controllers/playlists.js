const { Playlist, Track } = require('../models/index.js')


exports.newPlaylist = (req, res, next) => {
  const { body } = req;
  Playlist.create(body)
  .then((playlist) => {
    res.status(201).res.send({playlist})
  })
}

exports.getPlaylistById = (req, res, next) => {
  const { id } = req.params;
  Playlist.findById({id})
  .then((playlist) => {
    res.status(200).res.send({playlist});
  })
}

exports.getTracksForPlaylist = (req, res, next) => {
  const { playlist_id } = req.params;
  Track.find({playlist: playlist_id})
  .then((tracks) => {
    res.status(200).res.send({tracks})
  })

  
}
exports.addTrackToPlaylist = (req, res, next) => {
  console.log('ADD TRACK TO PLAYLIST')
  const { playlist_id } = req.params;
  Track.create({playlist: id})
  .then((track) => {
    
  })
}
exports.getPlaylistComments = (req, res, next) => {
  console.log('GET COMMENTS FOR PLAYLIST')
}
exports.addCommentToPlaylist = (req, res, next) => {
  console.log('MAKE COMMENT ON PLAYLIST')
}
exports.voteOnPlaylist = (req, res, next) => {
  console.log('VOTE ON PLAYLIST')
}

