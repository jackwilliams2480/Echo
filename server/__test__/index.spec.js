var request = require("supertest");
var app = require('../index');

describe('Test Jest', () => {
  test('Simple Test', async () => {
    expect(2 + 2).toBe(4);
  });
});

describe('GET /', () => {
  test('Response should be main page', async () => {
    const response = await request(app).get('/');
    expect(response.body).toMatch('main page');
    expect(response.statusCode).toBe(200);
  });
});
