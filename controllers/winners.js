const { Winner } = require('../models/index.js')

exports.areaWinner = (req, res, next) => {
    const { area_id } = req.params
    Winner.find({area: area_id})
    .then((winner) => {
      res.status(200).send({winner})
    })  
    .catch(next)
}

 