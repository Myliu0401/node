//导入http模块 
const http = require('http');

//创建http客户端
const request = http.request('http://localhost', {
   /*  headers: { //请求头

    }, */
    // host: '', //请求的ip
    port: 8081, //请求的端口号
    method: 'GET', //请求的方法
}, (message) => {

    const statusCode = message.statusCode; //响应状态码
    const responseHeader = message.headers; //响应头

    console.log(statusCode, responseHeader);

    let srt = '';
    
    message.on('data', (chunk) => {
        srt += chunk.toString('utf-8');
    });

    message.on('end', () => {
        console.log(srt)
        console.log('读取结束');
    })

});

request.write('');