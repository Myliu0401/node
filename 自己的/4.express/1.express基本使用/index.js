//导入http模块
const http = require('http');

//导入专门处理请求的模块 express
const express = require('express');

//创建一个express应用,也就是Application函数
const Appli = express();

//创建一个http协议的服务器
const server = http.createServer(Appli);


//监听端口号
server.listen(6070);

//监听成功触发
server.on('listening', () => {
    console.log('6070端口监听成功')
});

//给Appli函数添加不同的处理函数
Appli.get('*', (Request, Response) => {

    console.log('请求的方法', Request.method);
    console.log('请求的路径', Request.path);
    console.log('请求的参数', Request.query);


    //设置响应头
    Response.setHeader('a', '123456');

    //发回响应
    Response.send('<h1>你好啊!!!</h1>'); //参数为响应体
});