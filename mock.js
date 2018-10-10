const faker = require('faker')
const dayjs = require('dayjs')

const mock = {}

mock.createProfile = () => ({
  username: faker.internet.userName().toLowerCase(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph(),
  avatar_url: faker.image.imageUrl()
})

mock.createCity = () => ({
  name: faker.address.city(),
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY')
})

mock.createCommment = () => ({
  //profile: ref profiles
  body: faker.lorem.sentence(),
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY')
})

mock.createArea = () => ({
  //city: ref cities
  name: faker.address.streetName(),
  colour: faker.commerce.color(),
  image: faker.image.image(),
  bounds: [
    {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    } 
  ],
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY')
})

mock.createPlaylist = () => ({
  //profile: ref profile,
  //area: ref area,
  name: faker.random.word(),
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY')
})

mock.createTrack = () => ({
  //playlist: ref playlist,
  name: faker.random.words(),
  album: faker.random.word(),
  artwork_url: faker.image.abstract(),
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY')
})

mock.createVote = () => ({
  //profile: ref profiles,
  //playlist: ref playlist,
  votes: faker.random.number(),
  created_at: dayjs().format('DDMMYY'),
})

mock.createWinner = () => ({
  //profile: ref profiles,
  //area: ref areas,
  //playlist: ref playlist,
  created_at: dayjs().format('DDMMYY'),
  updated_at: dayjs().format('DDMMYY'),
  expires_at: dayjs().add(7, 'day').format('DDMMYY')
  //Not sure how to implement this
})



module.exports = mock