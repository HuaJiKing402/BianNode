'use strict';
var express = require('express');
var router = express.Router();
var https = require('https'); 
var config = require('../config.json')

// BianAPI V1
router.get('/', function (req, res) {
    res.status(200).json({ code: 200, data: { message: "Welcome to BianAPI V1" } });
    res.end();
});


//回声洞
router.get('/echo-hole/list', function (req, res) {

    res.redirect(301,'/assets/echo-hole.json')
});

router.get('/echo-hole/submit', function (req, res) {
    var fs = require('fs');
    var params = {
        "Name":req.query.name,
        "Message":req.query.message
    };
    fs.readFile(config["env"]["cache_path"]+'\\echo-hole.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var person = JSON.parse(data.toString());//将字符串转换为json对象
        person.data.push(params);//将传来的对象push进数组对象中
        var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile(config["env"]["cache_path"]+'\\echo-hole.json',str,function(err){
            if(err){
                console.error(err);
            }
            res.status(200).json({ code:200, data: { message:"提交成功" } });
        })
    })
});

module.exports = router;