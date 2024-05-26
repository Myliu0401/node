const net = require('net');


//创建客户端
const socket = net.createConnection({
    host:'duyi.ke.qq.com',
    port:80
},()=>{
    console.log('链接成功')
});

//发送请求
/* socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: 'keep-alive'


`);
 
socket.on('data',(chunk)=>{
    console.log(chunk.toString());
}); */