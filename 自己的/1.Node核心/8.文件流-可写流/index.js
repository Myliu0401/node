const fs = require('fs');
const path = require('path');


const filename = path.resolve(__dirname, './temp/1.txt');

const ws = fs.createWriteStream(filename, {
    highWaterMark: 3,
    encoding: 'utf-8',
    flags: 'a',
});

const bo = ws.write('a');
console.log(bo)
const bo1 = ws.write('a');
console.log(bo1)
const bo2 = ws.write('a');
console.log(bo2);

//会产生背压问题
for (var i = 0; i < 1024 * 1024 * 10; i++) {  
   ws.write('v');  
};

