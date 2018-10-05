const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const apiRouter = require('./routes/api.js')
const cors = require('cors')
const mongoose = require('mongoose')
const { DB_URL } = require('./config/databaseConfig.js')


app.use(cors())
app.use(bodyparser)

app.use('/api', apiRouter)
app.use('/*', (req, res, next) => {
  next({status: 400, msg: 'page not found'})
})

app.use((err, req, res, next) => {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
      err.status = 400
      if (!err.msg) err.msg = 'Bad Request'     
  } 
  next(err)
})

app.use((err, req, res, next) => {
  if (err.status !== 404 && err.status !== 400) {
      err.status = 500
      err.msg = 'Something has gone horribly wrong'
  }
  res.status(err.status).send({msg: err.msg})
})

mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
  console.log(`connected to ${DB_URL}`)
})

module.exports = app