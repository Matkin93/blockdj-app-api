const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const apiRouter = require('./routes/api.js')
const cors = require('cors')

app.use('/api', apiRouter)

module.exports = app