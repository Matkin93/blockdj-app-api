exports.formatAreaData = (areaData, cityDocs) => {
  return areaData.map((areaDatum) => {
    const cityID = cityDocs.find((city) => {
      if (city.name === areaDatum.city) {
        return city
      }
    })
    return { ...areaDatum, city: cityID._id }
  })
}

exports.formatCommentData = (commentData, profileDocs) => {
  return commentData.map((commentDatum) => {
    const profileID = profileDocs.find((profile) => {
      if (profile.username === commentDatum.profile) {
        return profile
      }
    })
    return { ...commentDatum, profile: profileID._id }
  })
}

exports.formatPlaylistData = (playlistData, profileDocs, areaDocs) => {
  return playlistData.map((playlistDatum) => {
    const profileID = profileDocs.find((profile) => {
      if (profile.username === playlistDatum.profile) {
        return profile
      }
    })
    const areaID = areaDocs.find((area) => {
      if (area.name === playlistDatum.area) {
        return area
      }
    })
    return { ...playlistDatum, profile: profileID._id, area: areaID._id }
  })
}

exports.formatTrackData = (trackData, playlistDocs) => {
  return trackData.map((trackDatum) => {
    const playlistID = playlistDocs.find((playlist) => {
      if (playlist.name === trackDatum.playlist) {
        return playlist
      }
    })
    return { ...trackDatum, playlist: playlistID._id }
  })
}

exports.formatVoteData = (voteData, profileDocs, playlistDocs) => {
  return voteData.map((voteDatum) => {
    const profileID = profileDocs.find((profile) => {
      if (profile.username === voteDatum.profile) {
        return profile
      }
    })
    const playlistID = playlistDocs.find((playlist) => {
      if (playlist.name === voteDatum.playlist) {
        return playlist
      }
    })
    return { ...voteDatum, profile: profileID._id, playlist: playlistID._id }
  })
}

exports.formatWinnerData = (winnerData, profileDocs, areaDocs, playlistDocs) => {
  return winnerData.map((winnerDatum) => {
    const profileID = profileDocs.find((profile) => {
      if (profile.username === winnerDatum.profile) {
        return profile
      }
    })
    const areaID = areaDocs.find((area) => {
      if (area.name === winnerDatum.area) {
        return area
      }
    })
    const playlistID = playlistDocs.find((playlist) => {
      if (playlist.name === winnerDatum.playlist) {
        return playlist
      }
    })
    return { ...winnerDatum, profile: profileID._id, area: areaID._id, playlist: playlistID._id }
  })
}