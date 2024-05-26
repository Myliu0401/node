const fs = require('fs');

const ws = fs.createWriteStream('./temp/1.text', {
    highWaterMark: 1
});

ws.on('open', () => {
    console.log('文件已打开')
});

ws.on('close', () => {
    console.log('文件已关闭')
});

ws.on('drain', () => {
    console.log('管道已清空')
});

for (var i = 0; i < 100; i++) {
   console.log(ws.write('a'));
};