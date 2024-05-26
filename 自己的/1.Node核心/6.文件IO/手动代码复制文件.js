const path = require('path'); //路径模块
const fs = require('fs'); //文件模块
const os = require('os'); //工具模块

const lujin = path.resolve(__dirname, './naisi/jpg/1.jpg'); //图片的路径
const lujin1 = path.resolve(__dirname, './naisi/jpg/2.jpg'); //路径,到时没有这个文件会自动创建

async function tupian() {

    //以异步代码的方式来
    const mi = await fs.promises.readFile(lujin);  //读取图片,以进制的方式
               await fs.promises.writeFile(lujin1,mi,{
                   flag:'a'
               }); //写入内容,其中路径中没有这个文件会自动创建一个文件,然后以进制的方式放进去
               console.log('===')
};
tupian();