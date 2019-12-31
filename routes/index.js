'use strict';

const express = require('express');
const router = express.Router();
const {query} = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const results = await query('SELECT * FROM offices LIMIT 3');
        res.render('index', {
            title: 'ExpressJS and MySQL',
            offices: results
        });
    } catch(err) {
        res.sendStatus(500);
    }
});

module.exports = router;