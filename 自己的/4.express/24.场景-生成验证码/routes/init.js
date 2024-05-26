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



//导入专门处理session的库
const session = require('express-session');
Appli.use(session({
    secret: 'naimi',
    name: 'sessionid',
}));


//导入处理跨域的中间件
/* Appli.use(require('./Handlingcrossdomain.js').kuayu); */

//利用cors库来处理跨域
const cors = require('cors');

//处理必须传origin属性
const peizs = ['http://127.0.0.1:5500', 'null', 'http://localhost:8848']

Appli.use(cors({
    credentials: true,
    origin: (origin, Callback) => {
        if (peizs.includes(origin) || origin === undefined) {
            Callback(null, origin);
        } else {
            Callback('不允许访问');
        }
    }
}));


//注入cookie
Appli.use(require('cookie-parser')( /* 'liu' */ )); //这个库导出一个函数,执行该函数会返回一个注入cookie的中间件函数


//解析cookie
Appli.use(require('./Parsingcookies.js').jiexi);


//导入处理日志记录
const logger = require('../logger.js');
//处理api日志记录
Appli.use('/api', (req, res, next) => {
    logger.apilgger.info(`请求方式[${req.method}],请求路径[${req.path}],客户端ip地址[${req.ip}]`); //函数里面的在文件记录日志是异步函数
    next();
});


//配置模板目录
Appli.set("views", path.resolve(__dirname, "./views"));

//服务器模板渲染
Appli.use('/naisi', require('./controller/student.js'));


//代理
//Appli.use('/data',require('./agent.js').Router);

//使用代理库
Appli.use(require('./Myagent.js'));

//防止爬虫
Appli.use(require('./Squareclimbing.js').Squareclimbing);


//给Appli函数添加不同的处理函数   --- 使用express内置中间件
Appli.use(express.static(filename)); //获取静态资源


//处理x-www-form-urlencoded类型的请求体
Appli.use(express.urlencoded({
    extended: true
}));


//处理json类型的请求体
Appli.use(express.json());


//验证码
Appli.use(require('./Verification.js').Ver);


//路由中间件
Appli.use('/api/xuesheng', xuerouter.Router);

/* Appli.use((res, req, next) => {
    console.log(res.body, '===');
    throw 123;
}); */

//用于管理员 
const denlu = require('./api/administrators.js');
Appli.use('/api/admin', denlu.Router);


//处理文件中间件 
Appli.use('/api/File', require('./processthefile.js').Router);


//处理附件,也就是下载文件
Appli.use('/dow', require('./downloa.js').dow);


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