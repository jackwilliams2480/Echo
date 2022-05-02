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

app.post('/createUser/:username/:email/:password', db.createUser)

app.put('/updateUser/:username/:email/:password', db.updateUser)

app.delete('/deleteUser/:id', db.deleteUser)

// Routes
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

app.get('/users', db.getUsers)
/**
 * @swagger
 *  /music/{title}:
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
app.get('/music/:title', db.getMusicByTitle)

/**
 * @swagger
 *  /music/{artist}:
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
app.get('/music/:artist', db.getMusicByArtist)

app.get('/playlists/:id', db.getPlaylistsbyUser)

app.get('/playlists/:id/:playlistTitle', db.getPlaylistsbyUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})