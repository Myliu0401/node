const http = require('http');
const url = require('url');

//创建一个http协议的服务器
const server = http.createServer((message, response) => {
    console.log('有请求来了');
    handleReq(message);

    //响应头
    response.setHeader('a', '1');
    response.setHeader('B', '2');

    //状态码
    response.statusCode = 404;

    //响应体
    response.write('你好！！！,百度');


    //发送完成
    response.end();

});


function handleReq(message) {

    //客户端传过来的请求头
    const head = message.headers;

    //请求方法
    const method = message.method;

    //请求的路径
    const path = message.url;

    //利用url模块,将路径进行解析
    const pathobj = url.parse(path);

    console.log('请求头:', head);
    console.log('请求方法:', method);
    console.log('请求路径:', pathobj);



    let body = '';

    //读取请求体
    message.on('data', (chunk) => {
        body += chunk;
    })

    //读取完毕触发
    message.on('end', () => {
        console.log('请求体读取完毕:')
        console.log(body)
    })

    //关闭文件后触发
    message.on('close', () => {
        console.log('=========')
    })
}



//监听的端口号
server.listen(80);

//监听事件
server.on('listening', () => {
    console.log('监听成功')
})