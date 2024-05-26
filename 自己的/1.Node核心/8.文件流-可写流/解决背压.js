const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './temp/2.txt');

const ws = fs.createWriteStream(filename, {
    encoding: 'utf-8',
    highWaterMark: 16,
});
let i = 0;

function write() {
    console.log('来了')
    let beiya = true;
    while (i < 1024 * 1024 * 10 && beiya) {
        beiya = ws.write('k');
        i++;
    }
};

write();

ws.on('drain', () => {
    write();
    console.log(i)
})