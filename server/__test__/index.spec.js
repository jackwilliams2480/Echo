var request = require("supertest");
var app = require('../index');

// jest.setTimeout(30000);
describe('Test Jest', () => {
  test('Simple Test', async () => {
    expect(2 + 2).toBe(4);
  });

  test('GET main page', async () => {
    const res = await request(app).get('/');
    expect(res.body).toMatch('main page');
    expect(res.statusCode).toBe(200);
  });
});

describe('/Users ', () => {
  test('GET all users', async() => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    const users = res.body;
    users.forEach(e => {
      expect(e.email).toBeTruthy();
      expect(e.password).toBeTruthy();
      expect(e.username).toBeTruthy();
    });
  });

  test('GET users with id', async() => {
    const res = await request(app).get('/users/2');
    expect(res.statusCode).toBe(200);
    const users = res.body;
    users.forEach(e => {
      expect(e.userid).toBe(2);
      expect(e.email).toMatch('linhpham@xyz');
      expect(e.password).toMatch('123');
      expect(e.username).toMatch('LinhPham');
    });
  });

  test('POST Login', async() => {
    const newUser = {
      username: 'Tiffany',
      password: '123',
      email: 'tiffany@xyz',
    };
    let res = await request(app)
    .post('/users/Tiffany/123/tiffany@xyz')
    // .send(newUser);
    expect(res.statusCode).toBe(201);

    res = await request(app).get('/users');
    res.body.forEach(x => {
      if (x.email === 'tiffany@xyz') {
        expect(res.username).toMatch('Tiffany');
        expect(res.password).toMatch('123');
      }
    });
  });

  test('PUT edit user', async () => {
    const editUser = {
      id: '1',
      username: 'JohnDoe',
      password: '123',
      email: 'johndoe@xyz',
    };
    let res = await request(app)
    .put('/users/1/JohnDoe/johndoe@xyz/123')
    // .send(newUser);
    expect(res.statusCode).toBe(200);

    res = await request(app).get('/users');
    res.body.forEach(x => {
      if (x.email === 'johndoe@xyz') {
        expect(res.username).toMatch('JohnDoe');
        expect(res.password).toMatch('123');
      }
    });
  });

  test('DELETE user', async () => {
    const res = await request(app)
    .delete('/users/deleteUser/1');

    expect(res.statusCode).toBe(200);
  });
});

describe('/Music ', () => {
  test('GET all music', async() => {
    const res = await request(app).get('/music');
    expect(res.statusCode).toBe(200);
    const music = res.body;
    music.forEach(e => {
      expect(e.musicid).toBeTruthy();
    });
  });

  test('GET music by genre', async() => {
    const res = await request(app).get('/music/getMusicByGenre/Rap');
    expect(res.statusCode).toBe(200);
    const music = res.body;
    music.forEach(e => {
      expect(e.genre).toMatch('Rap');
    });
  });

  test('GET music by title', async() => {
    const res = await request(app)
    .get('/music/getMusicByTitle/Drugs You Should Try It');
    expect(res.statusCode).toBe(200);

    const music = res.body;
    music.forEach(e => {
      expect(e.title).toMatch('Drugs You Should Try It');
    });
  });

  test('GET music by artist', async() => {
    const res = await request(app)
    .get('/music/getMusicByArtist/Travis Scott');
    expect(res.statusCode).toBe(200);

    const music = res.body;
    music.forEach(e => {
      expect(e.artist).toMatch('Travis Scott');
    });
  });
});

describe('/playlists ', () => {
  test('GET all playlists', async() => {
    const res = await request(app).get('/playlists');
    expect(res.statusCode).toBe(200);
    const playlists = res.body;
    playlists.forEach(e => {
      expect(e.userid).toBeTruthy();
    });
  });

  test('GET playlists by userid', async() => {
    const res = await request(app).get('/playlists/1');
    expect(res.statusCode).toBe(200);
    const playlists = res.body;
    playlists.forEach(e => {
      expect(e.userid).toBe(1);
    });
  });

  test('GET playlists by title', async() => {
    const res = await request(app)
    .get('/playlist/playlistTitle');
    expect(res.statusCode).toBe(200);

    const music = res.body;
    music.forEach(e => {
      expect(e.playlistTile).toMatch('playlistTitle');
    });
  });
});
