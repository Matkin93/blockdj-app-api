# blockdj-app-api
App api repo for our location based playlist

---

Run `npm install` to install all the dependancies for this api 

Create a spotifyConfig.js file and a databaseConfig.js inside a config directory. 

### spotifyConfig.js
```javascript
const spotifyCredentials = {
  client_id: '******** CLIENT ID ********',
  client_secret: '******** CLIENT SECRET ********',
  redirect_uri: '******** FE URL ********'
}
module.exports = spotifyCredentials
```
---

### databaseConfig.js
```javascript


const ENV = process.env.NODE_ENV || 'development';

const config = {
	development: {
		DB_URL: '*******URL TO DEV MONGO********',
        PORT: 9090,
	},
	test: {
		DB_URL: '******URL TO TEST MONGO********',
  },
  production: {
        DB_URL: '******URL TO PRODUCTION MONGO******'
  }
} 
module.exports = config[ENV];
```
---
##API Methods

| Endpoint                        | Method | Description                 |
|:-------------------------------:|:------:|:---------------------------:|
|/areas                           |GET     |gets all areas               |
|/areas/:city_id                  |GET     |gets areas in city           |
|/profiles                        |POST    |create new profile           |
|/profiles/:id                    |GET     |get profile by id            |
|/cities                          |GET     |get the cities               |
|/playlists                       |POST    |add a playlist               |
|/playlists/:playlist_id          |GET     |get playlist by playlist_id  |
|/playlists/:playlist_id/tracks   |GET     |get trackas for playlist     |
|/playlists/:playlist_id/tracks   |POST    |add track to a playlist      |
|/playlists/:playlist_id/comments |GET     |get comment on playlist      |
|/playlists/:playlist_id/comments |POST    |add comment to playlist      |
|/playlists/:playlist_id/vote?direction|PATCH|make a vote for playlist   |
|/winners/:ares_id                |GET     |get the winners of an area   |



