process.env.NODE_ENV = 'test'
const app = require('../app.js')
const request = require('supertest')(app)
const seedDB = require('../seed/seed.js')
const mongoose = require('mongoose')
const testData = require('../seed/testData/testData.js')
const { MongoClient } = require('mongodb')

describe('Block DJ APP', () => {
  let areaDocs;
  let cityDocs;
  let commentDocs;
  let playlistDocs;
  let profileDocs;
  let trackDocs;
  let voteDocs;
  let winnerDocs;
  let validID = mongoose.Types.ObjectId()

  beforeEach(function () {
    return seedDB(testData)
      .then((docs) => {
        return [areaDocs, cityDocs, commentDocs, playlistDocs, profileDocs, trackDocs, voteDocs, winnerDocs] = docs
      })
  }, 20000)
  afterAll(() => {
    console.log('Closing Database')
    return mongoose.disconnect(() => {
      console.log('Database Closed???')
    })
  })

  describe('Area Router', () => {
    describe('/areas', () => {
      it('GET: returns all the areas in database', (done) => {
        return request.get(`/api/areas`)
          .expect(200)
          .then((res) => {
            expect(res.body).toHaveProperty('areas');
            expect(res.body.areas).toHaveLength(6);
            expect(res.body.areas[0]).toHaveProperty('_id')
            expect(res.body.areas[0]).toHaveProperty('name')
            expect(res.body.areas[0]).toHaveProperty('city')
            expect(res.body.areas[0]).toHaveProperty('colour')
            expect(res.body.areas[0]).toHaveProperty('bounds')
            expect(res.body.areas[0]).toHaveProperty('created_at')
            expect(res.body.areas[0]).toHaveProperty('__v')
            done();
          })
      })
    })
    describe('/areas/:city_id', () => {
      it('GET: return all areas in a city', (done) => {
        return request.get(`/api/areas/${cityDocs[0]._id}`)
          .expect(200)
          .then((res) => {
            expect(res.body.areas[0].city).toBe(cityDocs[0]._id)
            expect(res.body).toHaveProperty('areas');
            expect(res.body.areas).toHaveLength(6);
            expect(res.body.areas[0]).toHaveProperty('_id')
            expect(res.body.areas[0]).toHaveProperty('name')
            expect(res.body.areas[0]).toHaveProperty('city')
            expect(res.body.areas[0]).toHaveProperty('colour')
            expect(res.body.areas[0]).toHaveProperty('bounds')
            expect(res.body.areas[0]).toHaveProperty('created_at')
            expect(res.body.areas[0]).toHaveProperty('__v')
            done();
          })
      })
      it('ERROR - GET: return 404', (done) => {
        return request.get(`/api/areas/${validID}`)
          .expect(404)
          .then((res) => {
            expect(res.body.areas).toBeUndefined()
            expect(res.body.msg).toBe('City not found')
            done()
          })
      })
    })
  })

  describe('City Router', () => {
    describe('/api/cities/', () => {
      it('GET: Return all cities in the database', () => {
        return request.get(`/api/cities/`)
          .expect(200)
          .then((res) => {
            expect(res.body).toHaveProperty('cities')
            expect(res.body.cities[0]).toHaveProperty('_id')
            expect(res.body.cities[0]).toHaveProperty('name')
            expect(res.body.cities[0]).toHaveProperty('created_at')
            expect(res.body.cities[0]).toHaveProperty('__v')
            done();
          })
      })
    })
  })

  describe.only('Playlist Router', () => {
    describe('/api/playlists/:playlist_id/votes', () => {
      it('PATCH: vote on a playlist', (done) => {
        return request.patch(`/api/playlists/${playlistDocs[0]._id}/votes`)
          .expect(200)
          .then((res) => {
            console.log(res.body)
            expect(res.body.playlist.votes).toBe(241)
            done();
          })
      }
      )
    })
    describe('/api/playlists/:playlist_id', () => {
      it('GET: get a playlist by id', (done) => {
        return request.get(`/api/playlists/${playlistDocs[0]._id}`)
          .expect(200)
          .then(res => {
            console.log(res.body);
            expect(res.body).toBe(!null)
            done();
          });
      });
    })
  })


})