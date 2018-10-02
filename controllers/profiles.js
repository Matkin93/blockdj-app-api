const newProfile = (req, res, next) => {
  console.log('MAKING NEW PROFILE')
}

const getProfileById = (req, res, next) => {
  console.log('RETRIEVE PROFILE FROM DATABASE')
}

module.exports = { newProfile, getProfileById }