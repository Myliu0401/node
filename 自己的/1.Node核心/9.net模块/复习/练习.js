//导入net网络通信模块
const net = require('net');

//导入操作系统信息模块
const os = require('os');

let obj;


//创建net的客户端 
const socket = net.createConnection({
    host: "duyi.ke.qq.com", //不能加协议,因为只是tcp/ip协议模块,加上http协议后会报错
    port: 80
}, () => {
    console.log('链接成功')
});

socket.on('close', () => {
    console.log('文件关闭,链接已断开');
})


//发送请求
socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`);

//监听接收信息
socket.on('data', (chunk) => {
    //判断是否为第一次读取,因为是流
    if (!obj) {
        obj = enclosure(chunk.toString('utf-8'));

        //判断是否读取完毕
        if (obj.body.length >= obj.head['Content-Length']) {
            obj.body = obj.body.trim();
            console.log(obj);
            socket.end(); //断开链接
        };
        return;
    };

    //除第一次外的读取
    if ((obj.body += chunk).length >= obj.head['Content-Length']) {
        obj.body = obj.body.trim();
        console.log(obj);
        socket.end(); //断开链接
        return;
    }
});



//将参数封装成对象
function enclosure(value) {
    const lineBreak = os.EOL; //换行符
    const index = value.indexOf(lineBreak + lineBreak); //响应头和响应体的分界索引
    const head = value.slice(0, index).split(lineBreak).slice(1).reduce((a, b) => {
        const arr = b.split(':')
        a[arr[0]] = arr[1].trim();
        return a;
    }, {});

    return {
        head: head,
        body: value.slice(index)
    }
};