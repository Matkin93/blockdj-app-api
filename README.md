# blockdj-app-api
App api repo for our location based playlist

To use the database create a config.js file inside a config directory. 

```javascript

const spotifyCredentials = {
  client_id: /* Check slack channel */
  client_secret: /* Check slack channel */
  redirect_uri = null
}

const DB_URL = 'mongodb://localhost:27017/blockdj_app'

module.exports = {DB_URL, spotifyCredentials}

```
