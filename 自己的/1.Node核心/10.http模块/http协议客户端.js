const http = require('http');
 

                //创建一个http协议的客户端
const request = http.request('http://www.baidu.com/', {
    port: 80, //端口号
    method: 'GET', //请求方法
   /*  headers:{
        Connection: 'keep-alive'
    } */
}, (message) => {
    const state = message.statusCode; //响应消息的状态码
    const tou = message.headers; //响应消息的响应头
    
    console.log('状态码:', state);
    console.log('响应头:', tou);

    let str = '';

    //message对象实际为一个读取流
    message.on('data', (value) => {
        str += value.toString('utf-8');
    });

    //读取结束触发的事件
    message.on('end',()=>{
        console.log('读取结束')
        console.log(str)
    })

});

request.write('北京'); //请求体
request.end(); //require对象实际为一个写入流, 发送消息体