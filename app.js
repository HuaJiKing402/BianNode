'use strict';
//express模块引入
var debug = require('debug')('biannode');
var express = require('express');

//日志、cookie引入
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//路由引入
var routes = require('./routes/index');

//配置文件
var config = require('./config');
var app = express();

//设置监听端口
//config["server"]["port"] 配置文件-端口
if(config["env"]["on_model"]){
    app.set('port', config["server"]["port"][1]);
}
else {    
    app.set('port', config["server"]["port"][0]);
}

//启用日志、cookie
app.use(cookieParser());
app.use(logger('dev'));

//启用路由系统
app.use('/assets', express.static('assets'));
app.use('/', routes);

//对无路径处理
app.use((req, res, next) => {
    res.status(404).json({ "code": 404, "data": { "message": "404 Not Found" } });
})

//启动服务器
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});