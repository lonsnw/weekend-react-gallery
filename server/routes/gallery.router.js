const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
    console.log('in GET');
    let queryText = 'SELECT * from "gallery" ORDER BY "id";';
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
});

module.exports = router;
