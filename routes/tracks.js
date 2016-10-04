'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

router.get('/tracks', (_req, res, next) => {
  knex('tracks')
    .orderBy('title')
    .then((rows) => {
      const tracks = camelizeKeys(rows);
      res.send(tracks);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
