const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('swagger-jsdoc')
const app = express()
const db = require('./queries')
const port = 8000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerDocument(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Routes
/**
 * @swagger
 * /users:
 *  get:
 *    description: Get all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/users', db.getUsers)

/**
 * @swagger
 *  /users/{id}:
 *   get:
 *     summary: Gets a user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Numeric ID of the user to get.
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/users/:id', db.getUserById)

/**
 * @swagger
 *  /users/{username}/{email}/{password}:
 *   post:
 *     summary: Creates a new user
 *     parameters:
 *       - in: path
 *         name: username
 *         type: string
 *         required: true
 *         description: Enter username
 *       - in: path
 *         name: email
 *         type: string
 *         required: true
 *         description: Enter user email
 *       - in: path
 *         name: password
 *         type: string
 *         required: true
 *         description: Enter user password
 *     responses:
 *       '201':
 *         description: A successful response
 */
app.post('/users/:username/:email/:password', db.createUser)

/**
 * @swagger
 *  /users/{id}/{username}/{email}/{password}:
 *   put:
 *     summary: updates a existing user
 *     parameters:
 *       - in: path
 *         name: id
 *         type: int
 *         description: Enter id
 *       - in: path
 *         name: username
 *         type: string
 *         description: Enter username
 *       - in: path
 *         name: email
 *         type: string
 *         description: Enter user email
 *       - in: path
 *         name: password
 *         type: string
 *         description: Enter user password
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.put('/users/:id/:username/:email/:password', db.updateUser)

/**
 * @swagger
 *  /users/deleteUser/{id}:
 *   delete:
 *     summary: Deletes a user by user id
 *     parameters:
 *       - in: path
 *         name: id
 *         type: int
 *         description: Enter user id
 *     responses:
 *       '200': 
 *         description: A successful response
 */
app.delete('/users/deleteUser/:id', db.deleteUser)

/**
 * @swagger
 * /music:
 *  get:
 *    description: Get all music stored on db
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/music', db.getMusic)

/**
 * @swagger
 *  /music/getMusicByGenre/{genre}:
 *   get:
 *     summary: Gets music by genre
 *     parameters:
 *       - in: path
 *         name: title
 *         type: string 
 *         required: true
 *         description: genre of song
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/music/getMusicByGenre/:genre', db.getMusicByGenre)

/**
 * @swagger
 *  /music/getMusicByTitle/{title}:
 *   get:
 *     summary: Gets music by title
 *     parameters:
 *       - in: path
 *         name: title
 *         type: string 
 *         required: true
 *         description: title of song
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/music/getMusicByTitle/:title', db.getMusicByTitle)

/**
 * @swagger
 *  /music/getMusicByArtist/{artist}:
 *   get:
 *     summary: Gets music by artist
 *     parameters:
 *       - in: path
 *         name: artist
 *         type: string
 *         required: true
 *         description: catalog of songs from artist
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/music/getMusicByArtist/:artist', db.getMusicByArtist)

/**
 * @swagger
 *  /playlists:
 *   get:
 *     description: Get all playlists
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/playlists', db.getPlaylists)

/**
 * @swagger
 *  /playlists/{id}:
 *   get:
 *     summary: Gets a list of playlists created by given user
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: Numeric ID of the user to get.
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/playlists/getPlaylistById/:id', db.getPlaylistsbyUser)

/**
 * @swagger
 *  /playlists/byTitle/{title}:
 *   get:
 *     summary: Gets list of playlists under the title name
 *     parameters:
 *       - in: path
 *         name: title
 *         type: string
 *         description: Title of playlist 
 *     responses:
 *       '200':
 *         description: A successful response
 */
app.get('/playlists/byTitle/:title', db.getPlaylistsbyPlaylistTitle)

/**
 * @swagger
 *  /playlists/remove/{id}/{playlistTitle}:
 *   delete:
 *     summary: Deletes a playlist by user id
 *     parameters:
 *       - in: path
 *         name: id
 *         type: int
 *         description: Enter user id
 *       - in: path
 *         name: playlistTitle
 *         type: string
 *         description: Enter playlistTitle
 *     responses:
 *       '200': 
 *         description: A successful response
 */
app.delete('/playlists/remove/:id/:playlistTitle', db.getPlaylistsbyUser)

/**
 * @swagger
 *  /playlist/addSong/{id}/{playlistTitle}/{musicid}:
 *   post:
 *     summary: Creates a new user
 *     parameters:
 *       - in: path
 *         name: id
 *         type: int
 *         description: Enter userid
 *       - in: path
 *         name: playlistTitle
 *         type: string
 *         description: Enter playlistTitle
 *       - in: path
 *         name: musicid
 *         type: string
 *         description: Enter musicid
 *     responses:
 *       '201':
 *         description: A successful response
 */
app.post('/playlist/addSong/:id/:playlistTitle/:musicid', db.addSongToPlaylist)

/**
 * @swagger
 *  /playlist/removeSong/{id}/{playlistTitle}/{musicid}:
 *   delete:
 *     summary: Creates a new user
 *     parameters:
 *       - in: path
 *         name: id
 *         type: int
 *         description: Enter userid
 *       - in: path
 *         name: playlistTitle
 *         type: string
 *         description: Enter playlistTitle
 *       - in: path
 *         name: musicid
 *         type: string
 *         description: Enter musicid
 *     responses:
 *       '201':
 *         description: A successful response
 */
app.post('/playlist/removeSong/:id/:playlistTitle/:musicid', db.removeSongFromPlaylist)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})