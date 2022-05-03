var request = require("supertest");
var app = require('../index');

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await app.app.get('/users', db.getUsers);
    console.log(response.body)
    expect(response.body).toBe(4);
  });
});
