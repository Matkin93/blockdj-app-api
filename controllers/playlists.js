const { Playlist, Track, Comment, Vote, Area } = require('../models/index.js')
const inside = require('point-in-polygon');


exports.newPlaylist = (req, res, next) => {
  const { body } = req;
  Playlist.create(body)
    .then((playlist) => {
      res.status(201).res.send({ playlist })
    })
    .catch(next)
}

exports.getPlaylistById = (req, res, next) => {
  const { id } = req.params;
  Playlist.findById({ id })
    .then((playlist) => {
      res.status(200).res.send({ playlist });
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
  Vote.create({ playlist: playlist_id })
  then((vote) => {
    res.status(200).send({ vote })
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
              Promise.all([Vote.find(), playlists])
                .then(([voteDocs, playlists]) => {
                  playlists.map(playlist => {
                    playlist.votes = [];
                    voteDocs.forEach(vote => {
                      vote.playlist === playlist._id && playlist.votes.push(vote);

                    })
                  })
                  console.log(playlists[0].tracks)
                  res.status(200).send({ playlists, area })
                })
            })

        }
      })
    })
    .catch(next)
}