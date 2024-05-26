//导入http协议模块
const http = require('http');


//导出专门处理请求的模块 express
const express = require('express');

//创建一个 express应用
const Application = express();

//创建http协议的服务器
const server = http.createServer(Application);

//监听端口号
server.listen(6070);

//监听端口事件
server.on('listening', () => {
    console.log(6070, '监听成功');
});


/* Application.get('*', (Request, Response, next) => {
    console.log('1=====');
    Response.send('123');
}, (Request, Response, next) => {
    console.log('2=====');
    Response.send('aaa');
}, (Request, Response, next) => {
    console.log('3=====');
    Response.send('nnn');
}); */


Application.use((Request, Response, next) => {
    console.log('111')
    next()
});

Application.use((err, Request, Response, next) => {
    console.log('112')
    next()
});