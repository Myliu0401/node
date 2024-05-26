const net = require('net');


//创建服务器
const server = net.createServer();

server.listen(8081);

server.on('listening',()=>{
    console.log('监听成功')
});


server.on('connection',(socket)=>{
    socket.on('data',(chunk)=>{
        console.log(chunk.toString())
    });



    setTimeout(()=>{
          socket.write('aaaaaaaaa')
    },2000)
})