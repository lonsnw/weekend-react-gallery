const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params);
    let queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    console.log(queryText);
    pool.query(queryText, [req.params.id]).then(() => {
      res.sendStatus(200);
    }).catch((error) => {
      console.error('error in PUT', error);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
    console.log('in GET');
    let queryText = 'SELECT * from "gallery" ORDER BY "title";';
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
});

// DELETE
router.delete('/hate/:id', (req, res) => {
  console.log('req.params:', req.params);
  let queryText = 'DELETE FROM "gallery" WHERE "id" = $1;';
  console.log(queryText);
  pool.query(queryText, [req.params.id]).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  })
})

// POST
router.post('/', (req, res) => {
  console.log('POST req.body', req.body);
  let queryText = 'INSERT INTO "gallery" ("url", "title", "description") VALUES ($1, $2, $3);';
  pool.query(queryText, [req.body.url, req.body.title, req.body.description]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500)
  });
})

module.exports = router;
