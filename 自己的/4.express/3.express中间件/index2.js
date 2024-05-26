const http = require('http');

const express = reuqire('express');

const Application = express();

const server = http.createServer(Application);

server.listen(6666);


server.on('listening', () => {
    console.log(6666, '监听成功');
});


Application.use((Request, Response, next) => {
    if (Request.path.startsWith('/api')) {
        // 说明你请求的是 api 接口
        next();
    } else {
        //说明你想要的是静态资源
        Response.send('静态资源')
    }
})


Application.get('/news/abc', (Request, Response, next) => {
    console.log('get')
    throw 123456;
});

Application.use((err, Request, Response, next) => {
    console.log('处理错误的函数');
    if (err) {
        Response.send('服务器发生错误')
    } else {
        next();
    }
})