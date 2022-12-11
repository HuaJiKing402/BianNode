'use strict';
var express = require('express');
var router = express.Router();
var https = require('https'); 

// BianAPI V1
router.get('/', function (req, res) {
    res.status(200).json({ code: 200, data: { message: "Welcome to BianAPI V1" } });
    res.end();
});
//回声洞
router.get('/echo-hole', function (req, res) {

    res.redirect(301,'/assets/echo-hole.json')
});
router.get('/echo-hole/:id', function (req, res) {
    var data = require("../assets/echo-hole.json")
    res.status(200).json(data["data"][req.params.id])

});

module.exports = router;

function isNumber(arg) {
    return typeof arg === 'number';
  }