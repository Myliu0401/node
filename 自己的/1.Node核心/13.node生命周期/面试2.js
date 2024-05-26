const { setImmediate } = require("timers");

//下面先执行那个

setTimeout(()=>{
 console.log('setTimeout')
},/* 0 */1);


setImmediate(()=>{
    console.log('setImmediate')
});



//没法正确绝对那个先执行,因为 计时器取到0,最少为1, node在执行入口文件后,进入事件循环有可能,到达计时器时,计时还没好
//也有可能计时已经结束。看计算机的执行速度和卡不卡顿