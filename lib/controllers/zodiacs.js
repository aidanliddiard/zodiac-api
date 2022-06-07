const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const detailZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(detailZodiac);
  })
  .get('/', (req, res) => {
    const data = zodiacs.map((zodiac) => ({
      id: zodiac.id,
      name: zodiac.name,
    }));
    res.json(data);
  });
