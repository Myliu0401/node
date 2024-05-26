async function async1() {
    console.log("async1 start"); //第二
    await async2(); //这里为同步执行,下面就为异步执行,如果await后面为Promise对象,会自动推向已决
    console.log("async1 end"); //第八
}
async function async2() {
    console.log("async2"); //第三
}
console.log("script start"); //第一打印
setTimeout(function () { //看运行速度和卡不卡顿
    console.log("setTimeout0"); //第十
}, 0);
setTimeout(function () { //看运行速度和卡不卡顿
    console.log("setTimeout3"); //第十一
}, 3);
setImmediate(() => console.log("setImmediate")); //看运行速度和卡不卡顿    第十二 
process.nextTick(() => console.log("nextTick")); //第七
async1();
new Promise(function (resolve) {
    console.log("promise1"); //第四
    resolve();
    console.log("promise2"); //第五
}).then(function () {
    console.log("promise3"); //第九
});
console.log("script end"); //第六














