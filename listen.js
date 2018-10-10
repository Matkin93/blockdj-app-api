const app = require('./app.js')

const port = 7777
app.listen(port, () => {
  console.log(`listen on port ${port}...`)
})
