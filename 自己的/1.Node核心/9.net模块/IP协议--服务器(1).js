const net = require('net');
const fs = require('fs');
const path = require('path');

const server = net.createServer(); //创建一个 TCP/IP协议服务器

server.listen(8080); //服务器监听的端口

//监听端口事件
server.on('listening', () => {
    console.log('监听成功');
});

//有客户端连接到这个服务器就会触发该事件
server.on('connection', (socket) => {
    console.log('有客户端连接到服务器');


    //读取客户端发过来的数据
    socket.on('data', async (chunk) => {
        console.log(chunk.toString('utf-8'),'====');


        const bodybuffer = await fs.promises.readFile(path.resolve(__dirname, './hsq.jpg')); //读取图片的内容,为buffer形式

        //将响应头的响应行和键值对转换成Buffer数组,如果是图片必须将响应头变成Buffer数组,浏览器才能解析
        const buffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type:image/jpeg

`, 'utf-8');

        const MyBuffer = Buffer.concat([buffer, bodybuffer]); //合并两个Buffer数组
        /* console.log(MyBuffer) */
        socket.write(MyBuffer); //发送数据

        socket.end(); //关闭文件,发送完毕
    });




    socket.on('close', () => { //文件关闭后触发
        console.log('断开链接了')
    })
});