const request = require('supertest');

const server = require('../server');

describe('/health', () => {
  it('should return status: UP', (done) => {
    request(server)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200, { status: 'UP'}, done)
  });
});