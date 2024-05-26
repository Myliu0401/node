const http = require('http');

const express = require('express');

const path = require('path');

const filename = path.resolve('../public');

const Application = express();

const server = http.createServer(Application);
server.listen(7777);
server.on('listening', () => {
    console.log('7777端口监听成功');
});



//使用内部中间件函数
//Application.use(express.static(__dirname + '/public'));

Application.use('/abc', (re, res, next) => {
    console.log(re.path);
    console.log(typeof(re.baseUrl),re.baseUrl);
})