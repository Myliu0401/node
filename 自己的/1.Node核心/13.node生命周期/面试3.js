const fs = require('fs');
const {
    setImmediate
} = require('timers');

fs.readFile('./index.js', () => {
    setTimeout(() => {
        console.log(1) //后执行

    });
    setImmediate(() => {
        console.log(2) //先执行
    })
})