const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 8000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/music/:title', db.getMusicByTitle)
app.get('/music/:artist', db.getMusicByArtist)
app.get('/playlists/:id', db.getPlaylistsbyUser)
app.get('/playlists/:id/:playlistTitle', db.getPlaylistsbyUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})