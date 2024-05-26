const http = require('http');
const express = require('express');
const Application = express();

const server = http.createServer(Application);

server.listen(2119);
server.on('listening', () => {
    console.log('2119监听成功')
});

/* Application.use(require('./urlencoded.js').urlencoded()); */

/* Application.use(express.urlencoded({
    extended: true
}));
 */

 Application.use(express.json());

Application.use((res, req, next) => {
   console.log(res.body);
   next()
});