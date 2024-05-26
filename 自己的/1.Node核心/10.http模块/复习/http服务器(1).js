//导入http模块
const http = require('http');


const path = require('path');

var util = require('util');

var geoip = require('geoip-lite');


const axios = require('axios');

//创建http协议服务器
const server = http.createServer((message, response) => {
    ProcessingRequests(message);

    processingResponse(response);

});


server.listen(8081,'0.0.0.0');
server.on('listening', () => {
    console.log('监听成功')
});

//处理请求信息
function ProcessingRequests(message) {
    const requestHeader = message.headers; //请求头
    const method = message.method; //请求的方法
    const mypath = message.url; //请求路径
  //  console.log(message)
    console.log('请求头', requestHeader);
    console.log('请求方法', method);
    console.log('请求路径', mypath);


    

      var ip = '112.97.61.184';
      var geo = geoip.lookup(ip);
      console.log(geo)

    console.log(path.parse(message.url));
    let srt = '';
    message.on('data', (chunk) => {
        srt += chunk.toString('utf-8');
    });

    message.on('close', () => {
        console.log(srt);
        console.log('资源读取完毕');
    });

};

//
function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};


//处理响应信息
function processingResponse(response) {
    setHead(response, 'a', '123');
    setHead(response, 'b', '456');


    response.statusCode = 200; //响应状态码

    response.write('你好！！！ whllo');

    response.end(); //断开链接

};


//设置响应头
function setHead(response, name, value) {
    response.setHeader(name, value);
};




/**
 * 根据 ip 获取获取地址信息
 */
/* var getIpInfo = function(ip, cb) {
  
    var sina_server = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=';
    var url = sina_server + ip;

 
 
    http.get(url, function(res) {
        console.log('===============')
        var code = res.statusCode;
        if (code == 200) {
            res.on('data', function(data) {
                try {
                    cb(null, JSON.parse(data));
                } catch (err) {
                    cb(err);
                }
            });
        } else {
            cb({ code: code });
        }
    }).on('error', function(e) { cb(e); });
}; */





/* function dizhi(err, msg){
     console.log('===============')
} */