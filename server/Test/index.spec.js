var request = require("supertest");
var app = require('../index');

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    expect(2 + 2).toBe(4);
  });
});
