const seedDB = require('./seed.js')
const mongoose = require('mongoose')
const { DB_URL}  = require('../config/databaseConfig.js')
const data = require('./testData/testData.js')

mongoose.connect(DB_URL, {useNewUrlParser: true}
)
.then(()=> {
    console.log(`Connected to ${DB_URL}...`) 
    return seedDB(data)
})
.then(() => {

    console.log('Closing Database')
    mongoose.disconnect()
})
.catch(console.error)