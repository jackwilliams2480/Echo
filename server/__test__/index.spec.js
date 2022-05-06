var request = require("supertest");
var app = require('../index');

// jest.setTimeout(30000);

describe('Test Jest', () => {
  test('Simple Test', async () => {
    expect(2 + 2).toBe(4);
  });
});

describe('GET /', () => {
  // test('GET main page', async () => {
  //   const res = await request(app).get('/');
  //   expect(res.body).toMatch('main page');
  //   expect(res.statusCode).toBe(200);
  // });

  test('GET all users', async() => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(404);
  });

  // it('GET users with id', async() => {
  //   const res = await request(app).get('/users/1');
  //   expect(res.statusCode).toBe(200);
  // });
});

// describe('POST /', () => {
//   test('POST login', async () => {

//   })
// })
