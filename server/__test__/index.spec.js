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
    const res = await request(app).get('/users?id=1');
    expect(res.statusCode).toBe(200);
    const users = res.body;
    users.forEach(e => {
      expect(e.id).toBe(1);
      expect(e.email).toMatch('abc@xyz');
      expect(e.password).toMatch('123');
      expect(e.username).toMatch('JohnDoe');
    });
  });

  test('POST Login', async() => {
    const newUser = {
      username: 'Tiffany',
      password: '123',
      email: 'tiffany@xyz',
    };
    const res = await request(app)
    .post('/users?username=Tiffany&password=123&email=tiffany@xyz')
    // .send(newUser);
    expect(res.statusCode).toBe(200);

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
    const res = await request(app)
    .put('/users?id=1&username=JohnDoe&password=123&email=johndoe@xyz')
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
    .delete('/users/deleteUser?id=1');

    expect(res.statusCode).toBe(200);
  });
});
