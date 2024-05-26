const express = require('express');
const http = require('http');
const path = require('path');
const Application = express();

const server = http.createServer(Application);


const mypath = path.resolve(__dirname, './public');

console.log(mypath)

//监听端口
server.listen(8086);
server.on('listening', () => {
    console.log('8086', '端口监听成功');
});

Application.get('/', express.static(mypath));


Application.post('/api/vv', (Request, Response) => {
      console.log(Request.headers);
      console.log(Request.body);
});