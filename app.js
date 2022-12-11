'use strict';
var debug = require('debug')('my express app');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var config = require('./config');
console.log("配置文件：")
console.log(config);

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/assets', express.static('assets'));
app.use('/', routes);

//对无路径处理
app.use((req, res, next) => {
    res.status(404).json({ "code": 404, "data": { "message": "404 Not Found" } });
})

//设置监听端口
//config["server"]["port"] 配置文件-端口
app.set('port', config["server"]["port"]);

//启动服务器
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});