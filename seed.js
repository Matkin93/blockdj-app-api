const faker = require('faker')
const {DB_URL} = require('./config/config.js')
const mongoose = require('mongoose')
const { Profile, Area } = require('./models/index.js')

const createProfile = () => ({
  username: faker.internet.userName(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph(),
  avatar_url: faker.image.imageUrl()
})

const createArea = () => ({
  name: faker.address.streetName(),
  // Not sure we need desription for areas
  // description: faker.lorem.sentence(),
  bounds: [
    {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    }
  ]
})

mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
  console.log(`connected to ${DB_URL}`)
  console.log('Dropping Database...')
  return mongoose.connection.dropDatabase();
})
.then(() => {
  const profiles = Array.from({length: 20}, createProfile)
  
  return Profile.insertMany(profiles)
})
.then(() => {
  const areas = Array.from({length: 10}, createArea)
  console.log(areas)
  return Area.insertMany(areas)
})
.then(() => {
  mongoose.disconnect()
  console.log(`disconnected from ${DB_URL}`)
})
.catch(console.error)