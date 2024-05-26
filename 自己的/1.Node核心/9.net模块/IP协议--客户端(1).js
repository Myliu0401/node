const net = require('net');


//返回一个 特殊的对象文件     
const socket = net.createConnection({ //建立链接
    host: 'duyi.ke.qq.com',
    port: 80,
}, () => {
    console.log('链接成功')
});

//写入内容,会将内容发送给服务器
/* socket.write('你好！百度'); */ //因为这里写入的不是一个 http协议 的请求消息格式,因为这个duyi.ke.qq.com服务器不认识 IPC/IP协议

//这个是 http协议的请求头格式   服务器认得  
socket.write(`GET / HTTP/1.1
Host:duyi.ke.qq.com
Connection: keep-alive

`);


/* 
   如果客户端与服务器链接断开了,这个是发不出去的

setTimeout(()=>{
    socket.write(`GET / HTTP/1.1
Host:duyi.ke.qq.com
Connection: keep-alive

`);

 console.log(123456)

},5000) */



let bo;
//读取文件内容
socket.on('data', (value) => {
    const data = value.toString();
    if (!bo) {
        bo = fuzhu(value.toString());
        if (shuzi()) {
            socket.end(); //读取结束断开链接,因为关闭文件是异步的需要时间,读取速度比关闭文件快
        }
        return;
    }

    bo.body += data;
    if (shuzi()) {
        socket.end(); //读取结束断开链接,因为关闭文件是异步的需要时间,读取速度比关闭文件快
    }
});

/**
 *  用于将响应体的消息头和消息体分开出来
 *  @param {*} data   数据
 */
function fuzhu(data) {
    /* console.log(data) */
    const shuju = data.indexOf('\r\n\r\n'); //一行结束的分隔符,不同操作系统是不同的
    const body = data.substr(shuju); //获取响应体

    //一顿骚操作将响应头字符串变成数组
    const ap = data.substr(0, shuju).split('\r\n').slice(1).map((str) => {
        return str.split(':').map((str1) => {
            return str1.trim(); //去除首尾空格
        })
    });

    //将数组变成一个对象
    const obj = ap.reduce((a, b) => {
        a[b[0]] = b[1]
        return a
    }, {});

    return {
        RequestHeader: obj, //响应头对象
        body: body.trim() //去除首尾空格 --- 响应体
    }
};


/**
 *  用于判断请求体的字节
 *
 */
function shuzi() {
    const k = Buffer.from(bo.body, 'utf-8').length; //对里面的响应体 字节
    const z = bo.RequestHeader['Content-Length']; //响应体的总 字节
    console.log(k, z);
    return k >= +z;
};


socket.on('close', () => { //文件被关闭时触发,也就是断开链接后触发
    console.log('结束了');
    console.log(bo.body);
});