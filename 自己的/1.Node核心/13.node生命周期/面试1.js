const statr = Date.now(); //当前时间戳

setTimeout(() => {
    console.log('setTimeout', Date.now() - statr);
}, 200);

const fs = require('fs'); //文件模块

//文件读取
fs.readFile('./index.js', 'utf-8', (err, data) => {
    console.log('readFile');
    const da = Date.now();
    while (Date.now() - da < 300) {}
});