const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const apiRouter = require('./routes/api.js')
const cors = require('cors')
const mongoose = require('mongoose')
const { DB_URL } = require('./config/config.js')

app.use(cors())
app.use(bodyparser)

app.use('/api', apiRouter)

mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
  console.log(`connected to ${DB_URL}`)
})

module.exports = app