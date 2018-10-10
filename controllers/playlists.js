const { Playlist, Track, Comment, Vote, Area, Profile } = require('../models/index.js')
const inside = require('point-in-polygon');

exports.newPlaylist = (req, res, next) => {
  const { body } = req;
  const username = body.profile;
  Profile.find({ username: username })
    .then(profileDoc => {
      body.profile = profileDoc[0]._id;
      Playlist.create(body)
        .then((playlist) => {
          res.status(201).send({ playlist })
        })
    })
    .catch(next)
}

exports.getPlaylists = (req, res, next) => {
  console.log(req.params);
  Playlist.find()
    .then(playlists => {
      res.status(200).send({ playlists });
    })
    .catch(next);
}

exports.getPlaylistById = (req, res, next) => {
  const { playlist_id } = req.params;
  Playlist.findById({ _id: playlist_id })
    .lean()
    .then((playlist) => {
      res.status(200).send({ playlist });
    })
    .catch(next)
}

exports.getTracksForPlaylist = (req, res, next) => {
  const { playlist_id } = req.params;
  Track.find({ playlist: playlist_id })
    .then((tracks) => {
      res.status(200).res.send({ tracks })
    })
    .catch(next)
}

exports.addTrackToPlaylist = (req, res, next) => {
  const { playlist_id } = req.params;
  Track.create({ playlist: playlist_id })
    .then((track) => {
      res.status(201).res.send({ track })
    })
    .catch(next)
}

exports.getPlaylistComments = (req, res, next) => {
  const { playlist_id } = req.params
  Comment.find({ playlist: playlist_id })
    .then((comments) => {
      res.status(200).res.send({ comments })
    })
    .catch(next)
}

exports.addCommentToPlaylist = (req, res, next) => {
  const { playlist_id } = req.params
  const { body } = req
  Comment.create({ playlist: playlist_id })
    .then((comment) => {
      res.status(201).res.send({ comment })
    })
    .catch(next)
}

exports.voteOnPlaylist = (req, res, next) => {
  const { playlist_id } = req.params
  const upvote = 1
  Playlist.findByIdAndUpdate(playlist_id, { $inc: { 'votes': upvote } }, { new: true })
    .then((playlist) => {
      console.log('Hello');
      console.log(playlist);
      res.status(200).send({ playlist })
    })
    .catch(next)
}

exports.getPlaylistsInArea = (req, res, next) => {
  const { area_id } = req.params;
  Playlist.find({ area: area_id })
    .then((playlists) => {
      res.status(200).send(playlists)
    })
    .catch(next)
}
