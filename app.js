const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const apiRouter = require('./routes/api.js')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { DB_URL = require('./config/databaseConfig.js').DB_URL } = process.env;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://blockdj.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://blockdj-app-api.example.com',
  issuer: "https://blockdj.eu.auth0.com/",
  algorithms: ['RS256']
});

app.use(cors())
app.use(bodyparser.json());


// app.use(jwtCheck);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
//   next();
// });



mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to ${DB_URL}`)
  })

app.use('/api', apiRouter)
app.use('/*', (req, res, next) => {
  next({ status: 400, msg: 'page not found' })
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
  res.status(err.status).send({ msg: err.msg })
})

module.exports = app