//这个服务器是直接从http模块那个文件直接复制过来的,因为功能都差不多一样,只是https多了个证书


//静态资源服务器
// http://localhost:9527/index.html  -> public/index.html 文件内容
// http://localhost:9527/css/index.css  -> public/css/index.css 文件内容


//http协议通信模块
const fs = require('fs');
const https = require('https');

//路径模块
const path = require('path');

//处理url的模块 
const url = require('url');




//创建https协议服务器
const server = https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, './server-key.pem')), //服务器的私钥
    cert: fs.readFileSync(path.resolve(__dirname, './server-cert.crt')) //服务器的证书
}, monitor);


/**
 *  监听函数,有请求过来就会执行
 *
 * @param {*} message         请求发过来的消息,接收消息,-----读取流
 * @param {*} response        响应发回去的消息,发出消息,-----写入流
 */
async function monitor(message, response) {

    //处理路径----要读取文件的路径
    const minai = await processingPath(message);

    if (minai) {
        //读取文件内容
        /* const neiron = await read(minai); */
        /* console.log(neiron) */
        const neiron = await fs.promises.readFile(minai);
        response.write(neiron);
        //发出完毕
        response.end();
    } else { //访问的路径有错误

        //发出响应体
        response.write('There is an error in the path you are visiting！！！');
        //发出完毕
        response.end();
    }

};

/**
 *  处理路径
 *
 * @param {*} message   请求发过来的消息,----读取流
 */
async function processingPath(message) {
    console.log(1234567)
    //请求头
    const hed = message.headers;

    //路径,因为这个路径可能带有数据,所以只能进一步进行处理
    let Path = message.url;

    //利用url模块处理路径
    const urlobj = url.parse(Path);

    //得出过滤后的请求路径
    Path = urlobj.pathname;

    /* console.log(Path); */

    //进行路径补全处理
    let filename = path.resolve(__dirname, 'Public', Path.slice(1));

    //判断文件或目录存不存在
    let boolean = await panduan(filename);

    if (!boolean) { //文件或目录不存在
        return null;

    } else if (boolean.isDirectory()) { //判断是文件还是目录

        //根据目录是什么来添加默认文件
        const lujin = path.resolve(filename, `index.${Path.slice(1)||'html'}`);
        //再继续判断默认添加的文件,存不存在
        boolean = await panduan(lujin);
        if (!boolean) {
            //默认添加上去的文件也不存在
            return null;

        } else {

            /*  console.log(lujin) */
            //默认添加上去的文件存在
            return lujin; //将路径返回出去,为了读取内容  ------ 这个是经过添加默认处理后的
        }

    } else { //是一个文件
        //文件存在
        return filename; //将路径返回出去,为了读取内容  ------ 这个是没有添加默认处理的
    }

};

//判断文件或目录存不存在
async function panduan(filename) {
    try {
        const mi = await fs.promises.stat(filename); //看会不会报错
        return mi
    } catch {
        return null;
    }

};

//读取文件内容
async function read(TheFinalPath) {
    //文件可读流
    const ReadStream = fs.createReadStream(TheFinalPath, {
        encoding: 'utf-8',
    });

    let str = '';

    //读取触发
    await new Promise((resolve, reject) => {
        //读取文件
        ReadStream.on('data', (chunk) => {
            str += chunk;
        });

        //读取文件内容完毕
        ReadStream.on('end', () => {
            resolve(str)
        })
    });

    return str;

}


//监听的端口号
server.listen(443);

server.on('listening', () => {
    console.log('监听成功')
})