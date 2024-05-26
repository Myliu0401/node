const net = require('net');

const socket = net.createConnection({
    host: 'localhost',
    port: 8081,
}, () => {
    console.log('链接成功')
});

socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: 'keep-alive'


`);

/* setInterval(function () {
    
}, 6000) */