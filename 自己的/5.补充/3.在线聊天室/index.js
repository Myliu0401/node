//导入http协议模块
const http = require('http');


//导入处理请求模块
const express = require('express');

//导入处理websocket协议模块
const socketIO = require('socket.io');

//导入处理路径的模块
const path = require('path');

//处理http请求的函数
const App = express();

//创建Http服务器
const server = http.createServer(App);

//处理http协议请求 --- 获取静态资源
App.use(express.static(path.resolve(__dirname, './public')));

//对http服务器的socket进行处理,也就是处理websocket协议
const io = socketIO(server);

//对websocket请求进行处理
const chuli = require('./chuli.js');
chuli(io);

server.listen(5008, () => {
    console.log('5008端口 监听成功')
});