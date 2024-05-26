//导入专门处理请求的模块
const express = require('express');

//创建一个 express应用
const Appli = express();

//处理路径的模块
const path = require('path');

//静态资源目录的地址
const filename = path.resolve(__dirname, '../public/');

//导入路由中间件
const xuerouter = require('./api/student.js');

//导入http协议的模块
const http = require('http');

//创建一个http协议的服务器
const server = http.createServer(Appli);

//监听端口
server.listen(8848);

//监听端口事件
server.on('listening', () => {
    console.log('8848 监听成功')
});

//导入处理跨域的中间件
Appli.use(require('./Handlingcrossdomain.js').kuayu);


//注入cookie
Appli.use(require('cookie-parser')( /* 'liu' */ )); //这个库导出一个函数,执行该函数会返回一个注入cookie的中间件函数


//解析cookie
Appli.use(require('./Parsingcookies.js').jiexi);


//给Appli函数添加不同的处理函数   --- 使用express内置中间件
Appli.use(express.static(filename)); //获取静态资源


//处理x-www-form-urlencoded类型的请求体
Appli.use(express.urlencoded({
    extended: true
}));


//处理json类型的请求体
Appli.use(express.json());


//路由中间件
Appli.use('/api/xuesheng', xuerouter.Router);

/* Appli.use((res, req, next) => {
    console.log(res.body, '===');
    throw 123;
}); */

//用于管理员 
const denlu = require('./api/administrators.js');
Appli.use('/api/admin', denlu.Router);


//处理错误中间件
Appli.use((err, res, req, next) => {
    // console.log(err,'=================')
    if (err) {
        const obj = {
            code: 500, //相当于响应码
            msg: err instanceof Error ? err.message : err
        };

        req.status(500).send(obj);
    } else {
        next();
    }
});