const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiac/id should return a detail page of a zodiac sign', async () => {
    const data = await request(app).get('/zodiac/1');
    expect(data.body).toEqual({
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    });
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
