const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiac should return a list of zodiac signs', async () => {
    const data = await request(app).get('/zodiac');
    const exp = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
    expect(data.body).toEqual(exp);
  });
  afterAll(() => {
    pool.end();
  });
});
