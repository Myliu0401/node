const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './1.txt');

const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    autoClose: true,
    highWaterMark: 1
});


rs.on('open', () => {
    console.log('文件被打开了')
});



rs.on('error', () => {
    console.log('发生错误')
});

rs.on('close', () => {
    console.log('文件关闭', '文件关闭后执行')
});

/* rs.close(); */

rs.on('data', (value) => {
    console.log(value);
    rs.pause();
});

rs.on('pause', () => {
    console.log('暂停读取了');
    setTimeout(() => {
        rs.resume();
    }, 500)
});

rs.on('resume', () => {
    console.log('恢复读取了')
})

rs.on('end', () => {
    console.log('数据读取完毕');
})
console.log('====')