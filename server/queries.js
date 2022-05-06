const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY userid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const username = request.params.username;
  const email = request.params.email;
  const password = request.params.password;

  pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with username: ${username}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const username = request.params.username;
  const email = request.params.email;
  const password = request.params.password;

  pool.query(
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE userid = $4',
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

  pool.query('DELETE FROM users WHERE userid = $1 ', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const getMusic = (request, response) => {
  pool.query('SELECT * FROM music', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMusicByTitle = (request, response) => {
  const title = request.params.title;

  pool.query('SELECT * FROM music WHERE title = $1 ', [title], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
}

const getMusicByArtist = (request, response) => {
  const artist = request.params.artist;

  pool.query('SELECT * FROM music WHERE artist = $1 ', [artist], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
}

const getMusicByGenre = (request, response) => {
  const genre = request.params.genre;

  pool.query('SELECT * FROM music WHERE genre = $1 ', [genre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
}

const getPlaylists = (request, response) => {
  pool.query('SELECT * FROM playlists', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const removePlaylist = (request, response) => {
  const userid = parseInt(request.params.genre);
  const playlistTitle = request.params.playlistTitle;
  
  pool.query('DELETE FROM playlists WHERE userid = $1 AND playlistTitle = $2 ', [userid, playlistTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Deleted playlist: ${playlistTitle}`)
  })
}

const getPlaylistsbyUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM playlists WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(result.rows)
  })
}

const getPlaylistsbyPlaylistTitle = (request, response) => {
  const id = parseInt(request.params.id)
  const playlistTitle = request.params.playlistTitle

  pool.query('SELECT * FROM playlist WHERE userid = $1 AND playlistTitle = $2', [id, playlistTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(result.rows)
  })
}

const addSongToPlaylist = (request, response) => {
  const id = parseInt(request.params.id)
  const playlistTitle = request.params.playlistTitle;
  const musicid = request.params.musicid;

  pool.query(
    'INSERT INTO playlist VALUES ($1, $2, $3)',
    [id, playlistTitle, musicid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Added song: ${musicid} to playlist: ${playlistTitle}`)
    }
  )
}

const removeSongFromPlaylist = (request, response) => {
  const id = parseInt(request.params.id)
  const playlistTitle = request.params.playlistTitle;
  const musicid = request.params.musicid;

  pool.query(
    'DELETE FROM playlist WHERE userid = $1 AND playlistTitle = $2 AND musicid = $3',
    [id, playlistTitle, musicid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Removed ${musicid} from playlist`)
    }
  )
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getMusic,
  getMusicByGenre,
  getMusicByTitle,
  getMusicByArtist,
  getPlaylists,
  getPlaylistsbyUser,
  removePlaylist,
  getPlaylistsbyPlaylistTitle,
  addSongToPlaylist,
  removeSongFromPlaylist
}