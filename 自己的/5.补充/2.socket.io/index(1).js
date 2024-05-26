//导入http协议模块
const http = require('http');

//导出专门处理请求的库
const express = require('express');

//导入处理路径的模块
const path = require('path');

//导入专门处理websocket协议请求的库
const socketIO = require("socket.io");


//处理请求函数
const app = express()

//创建http协议服务器,让express库来处理http协议请求
const server = http.createServer(app);


//处理http的请求   获取静态资源
app.use(express.static(path.resolve(__dirname, './public')));


//处理websocket协议请求
const io = socketIO(server);


//监听websocket链接
io.on('connection', (socket) => {
    console.log('http握手完成')
    //监听socket
    socket.on('text', (chunk) => {
        console.log(chunk.toString("utf-8"))
    });

    let tiem = setInterval(() => {
        //发回响应
        socket.emit('test', '1====================1')
    }, 2000);

    //断开链接
    socket.on('disconnect', () => {
        clearInterval(tiem);
        console.log('链接已断开')
    })
});




//监听端口号
server.listen(5800);

server.on('listening', () => {
    console.log('监听端口成功')
});

