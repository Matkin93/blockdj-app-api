const faker = require('faker')
const {DB_URL} = require('./config/config.js')
const mongoose = require('mongoose')
const { Profile } = require('./models/index.js')

const createProfile = () => ({
  username: faker.internet.userName(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph(),
  avatar_url: faker.image.imageUrl()
})

mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
  console.log(`connected to ${DB_URL}`)
  return mongoose.connection.dropDatabase();
})
.then(() => {
  const profiles = Array.from({length: 20}, createProfile)
  console.log(profiles)

  return Profile.insertMany(profiles)
})
.then(() => {
  mongoose.disconnect()
  console.log(`disconnected from ${DB_URL}`)
})
.catch(console.error)