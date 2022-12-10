'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.status(200).json({ "code": 200, "data": { "message": "Welcome to BianAPI" } });
    res.end();
});
// Start

// End

// API V1路由
var v1 = require('./v1');
router.use('/v1', v1);

//API V2路由
//var v2 = require('./v2');
//router.use('/v2', v2);

module.exports = router;