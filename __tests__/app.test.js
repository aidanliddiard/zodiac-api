const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const {zodiacs} = require('../data/zodacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiacs should return a list of zodiac signs', async () => {
    const data = await request(app).get('/zodiacs');
    expect(data.body).toEqual(zodiacs);
  });
  afterAll(() => {
    pool.end();
  });
});
