//静态资源服务器
// http://localhost:9527/index.html  -> public/index.html 文件内容
// http://localhost:9527/css/index.css  -> public/css/index.css 文件内容


//导入http模块
const http = require('http');

//导入url模块
const url = require('url');

//导入path模块
const path = require('path');

//导入文件处理模块
const fs = require('fs');

//创建http协议服务器
const server = http.createServer(async (message, response) => {
    const data = await processingRequests(message);
    if (data) {
        response.write(data);
        response.end(); //断开链接
    } else { //文件或目录不存在
        response.write('文件或目录不存在！！！');
        response.end(); //断开链接
    }

});


//监听端口
server.listen(8086);

//监听成功事件
server.on('listening', () => {
    console.log('监听端口成功')
});


//处理请求数据
async function processingRequests(message) {

    const mypath = message.url; //请求路径
    const mypaths = url.parse(mypath);


    //补全路径
    const Path = path.join(__dirname, 'public', mypaths.pathname);

    const isbo = await doesItExist(Path); //判断文件或目录是否存在
    if (isbo) { //存在
        //判断是否为目录
        return isbo.isDirectory() ? await directoryOrFile(true, mypaths) : await directoryOrFile(false, mypaths);

    } else {
        return false;
    }

};


//判断文件或目录是否存在
async function doesItExist(path) {
    try {
        const Probj = await fs.promises.stat(path);
        return Probj;
    } catch (err) {
        return false;
    }
};

//判断目录还是文件
async function directoryOrFile(boolean, obj) {

    if (boolean && obj.pathname === '/') { //根目录
        return await pathname(path.join(__dirname, 'public', 'index.html'));
    };

    if (boolean) { //目录
        if (obj.pathname.slice(1) === 'img') { //处理图片
            return await pathname(path.join(__dirname, 'public', obj.pathname.slice(1), 'index.jpg'));
        }
        return await pathname(path.join(__dirname, 'public', obj.pathname.slice(1), `index.${obj.pathname[obj.pathname.length-1]==='/'?obj.pathname.slice(1,obj.pathname.length-1):obj.pathname.slice(1)}`));
    } else { //文件
        return await pathname(path.join(__dirname, 'public', obj.pathname));
    }

};


//获取资源
async function pathname(path) {
    return await fs.promises.readFile(path);
};