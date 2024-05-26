//导入net模块
const net = require('net');

//创建服务器
const server = net.createServer((socket) => {
    //console.log('客户端链接成功')
    socket.once('data', (chunk) => { //注册一次性事件
        const datas = chunk.toString('utf-8').split('\r\n');
        datas.shift(); //截取掉数组第一项

        const dataObj = {};

        datas.filter((str) => {
            return str
        }).map((data) => {
            return [data.slice(0, data.indexOf(':')).trim(), data.slice(data.indexOf(':') + 1).trim()]
        }).forEach((el, index) => {
            dataObj[el[0]] = el[1]
        });

        // console.log(dataObj);


        //Sec-WebSocket-Accept属性的值进行特殊处理
        const crypto = require("crypto");
        const hash = crypto.createHash("sha1");
        hash.update(dataObj['Sec-WebSocket-Key'] + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
        const key = hash.digest("base64");

        console.log(dataObj)

        //发回http握手
        socket.write(`HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: ${key}

`);

        //当,上面将socket文件里的内容取出后,socket文件就没有内容了,所以第一次请求过来时,这里不触发。
        socket.on('data', (chunk) => {
            console.log(chunk, '=========')
          
        });

    });

});


//监听端口
server.listen(5008);


server.on('listening', () => {
    console.log('链接成功');
});