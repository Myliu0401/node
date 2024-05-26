const { setImmediate } = require("timers");

console.time(); //开始计算程序执行的时间
let i = 0;

function test() {
    i++;
    if (i < 1000) {
        /* setTimeout */setImmediate(test, 0)
    } else {
        console.timeEnd(); //从开始计算的时间 到 这里程序结束的时间
    }
}
test();