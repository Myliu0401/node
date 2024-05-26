const http = require('http');


const server = http.createServer((req, res) => {
    console.log('有请求了')
    res.write('');
   // res.end();
    console.log('123')
});

server.listen(8081);
server.on('listening', () => {
    console.log('监听成功')
});