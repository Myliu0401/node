//导入文件处理模块
const fs = require('fs');


//可读流
const rs = fs.createReadStream('./misi.text', {
    encoding: 'utf-8',
    highWaterMark:3
});

rs.on('open', () => {
    console.log('文件已打开')
});

rs.on('error', (err) => {
    console.log('发生错误', err)
});

rs.on('close', () => {
    console.log('文件已关闭');
});

rs.on('data', (chunk) => {
    console.log('读取的数据',chunk);
});

rs.on('end', () => {
    console.log('所有数据读取完毕');
});