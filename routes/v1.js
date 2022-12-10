'use strict';
var express = require('express');
var router = express.Router();
var https = require('https'); 

// BianAPI V1
router.get('/', function (req, res) {
    res.status(200).json({ code: 200, data: { message: "Welcome to BianAPI V1" } });
    res.end();
});
router.get('/one', function (req, res) {
    res.status(200).json({user:"awa"});
});
router
module.exports = router;