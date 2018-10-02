//Is there any need for the user to see a list of areas
const getAreas = (req, res, next) => {
  console.log('GET ALL AREAS')
}
const getAreaByCordinates = (req, res, next) => {
  console.log('GET AREA BY COORDINATES PASSES INTO REQ.QURERY')
}

module.exports = { getAreas, getAreaByCordinates }