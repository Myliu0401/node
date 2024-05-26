//导入http协议模块
const http = require('http');


//导出专门处理请求的模块 express
const express = require('express');

//创建一个 express应用
const Application = express();

//创建http协议的服务器
const server = http.createServer(Application);

//监听端口号
server.listen(5070);

//监听端口事件
server.on('listening', () => {
    console.log(5070, '监听成功');
});

//给express应用添加不同的处理函数 -------  中间件函数
Application.get('/naisi/abc', (Request, Response, next) => {
    console.log('第一个');

    //提交给下个中间件
    next();
});

Application.get('/naisi/abc', (Request, Response, next) => {
    console.log('第二个');
    throw 123456;
});

Application.get('/naisi/abc', (Request, Response, next) => {
    console.log('第三个');
    next()
});

Application.use('/naisi/abc', (err, Request, Response, next) => {
    console.log('第四个');
    next()
});

Application.get('/naisi/abc', (Request, Response, next) => {
    console.log('第五个');
    next();
});