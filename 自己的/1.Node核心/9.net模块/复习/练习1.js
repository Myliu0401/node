//到入路径模块
const path = require('path');

//导入net网络通信模块
const net = require('net');

//到入处理文件模块
const fs = require('fs');

//创建TCP/IP协议服务器
const server = net.createServer();

//监听端口
server.listen(8080);

server.on('listening', () => {
    console.log('监听成功')
});

server.on('connection', (socket) => {
    console.log('有客户端连接到服务器');
    socket.on('data',(chunk)=>{
           
           misi(socket)
    })
});

async function misi(socket) {
    const base = await fs.promises.readFile('../hsq.jpg');
    const Bu = Buffer.from(`HTTP/1.1 200 OK
Content-Type:image/jpeg

`, 'utf-8');
    socket.write(Buffer.concat([Bu, base]));
    socket.end();
}

