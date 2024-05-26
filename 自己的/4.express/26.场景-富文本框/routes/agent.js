//这个模块用于处理代理


//导入http模块   ----- 创建客户端要用到
const http = require('http');


//导入处理请求的模块 ---- 要创建路由中间件 
const express = require('express');

//创建路由
const router = express.Router();


router.all('/api/:filename', (req, res, next) => {
    //获取url地址 
    const ip = req.path;

    //获取基地址
    const url = req.baseUrl;

    //拼接成完整url的path
    const up = url + ip;

    //发送给那个服务器
    const Url = "yuanjin.tech"


    //创建客户端
    const request = http.request(`http://www.${Url}`, {
        // host: Url,
        port: 5100, //端口号
        method: req.method, //请求方法
        path: ip, //请求的路径
        headers: req.headers //请求头
    }, (message) => {
        //message 为响应对象

        //请求体
        let str = '';

        //读取响应体
        message.on('data', (chunk) => {
            //拼接请求体
            str += chunk;
        });

        //响应体读取完毕
        message.on('end', () => {
            //向页面的客户端发回响应            

            //设置响应头
            for (let key in message.headers) {
                res.header(key, message.headers[key]);
            }

            //响应码
            res.status(message.statusCode);

            //响应体  ---- 会自动执行end函数
            res.send(str);

        });

    });

    //请求体
    let str = '';

    //读取请求体
    req.on('data', (chunk) => {
        //拼接请求体
        str += chunk
    });

    //请求体读取完毕
    req.on('end', () => {
        //发送请求 --- 会将参数拼接在响应体
        request.write(str);
        console.log(str)
        //请求发送完毕
        request.end();
    });
    // req.pipe(request)

});


exports.Router = router;