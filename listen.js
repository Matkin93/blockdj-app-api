const app = require('./app.js')

const port = process.env.PORT || 7777
app.listen(port, () => {
  console.log(`listen on port ${port}...`)
})
