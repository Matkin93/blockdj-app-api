process.env.NODE_ENV = 'test'
const app = require('../app.js')
const request = require('supertest')(app)
const seedDB = require('../seed/seed.js')
const { expect } = require('chai')
const mongoose = require('mongoose')
const testData = require('../seed/testData/testData.js')

describe('Block DJ API /api', () => {
  let areaDocs;
  let cityDocs;
  let commentDocs;
  let playlistDocs;
  let profileDocs;
  let trackDocs;
  let voteDocs;
  let winnerDocs;

    beforeEach(() => {
      return seedDB(testData)
        .then((docs) => {
          return [areaDocs, cityDocs, commentDocs, playlistDocs, profileDocs, trackDocs, voteDocs, winnerDocs]
        })

    })
    after(() => {
      return mongoose.disconnect()
    })
    describe('')
})