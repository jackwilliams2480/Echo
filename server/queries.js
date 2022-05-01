const Pool = require('pg').Pool
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'echo_music_database',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { username, email, password } = request.body

  pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { username, email, password } = request.body

  pool.query(
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4',
    [username, email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1 ', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const getMusicByTitle = (request, response) => {
  const title = parseInt(request.params.title)

  pool.query('SELECT * FROM music WHERE id = $1 ', [title], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Music found by the title: ${title}`)
  })
}

const getMusicByArtist = (request, response) => {
  const artist = parseInt(request.params.artist)

  pool.query('SELECT * FROM music WHERE artist = $1 ', [artist], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Music found by the requested artist: ${artist}`)
  })
}

const getPlaylistsbyUser = (request, response) => {
  const { id } = parseInt(request.params.id)

  pool.query('SELECT * FROM playlists WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlists from user: ${result.insertId}`)
  })
}

const getPlaylistsbyPlaylistTitle = (request, response) => {
  const id = parseInt(request.params.id)
  const playlistTitle = parseInt(request.params.playlistTitle)

  pool.query('SELECT * FROM playlist WHERE userid = $1 AND playlistTitle = $2', [id, playlistTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlist from user: ${result.insertId}`)
  })
}

const addSongToPlaylist = (request, response) => {
  const id = parseInt(request.params.id)
  const { userid, playlistTitle, musicid } = request.body

  pool.query(
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4',
    [username, email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getMusicByTitle,
  getMusicByArtist,
  getPlaylistsbyUser,
  getPlaylistsbyPlaylistTitle
}