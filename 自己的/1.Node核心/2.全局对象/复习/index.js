//全局对象
/* console.log(global.global === global); */ //true



/* const Tiem = setTimeout(() => {
    console.log('==')
}, 2000);

console.log(Tiem) */

/* setImmediate(()=>{
    console.log('123')
},2000) */ //0秒就执行


/* console.log(global.queueMicrotask) */

/* console.log(global.__dirname); */
/* console.log(__filename); */

//返回命令行路径
/* console.log(global.process.cwd()); */


/* console.log(global.process.argv); */

/* console.log(global.process.arch); */ //当前操作系统


/* console.log(global.process.env); */

/* console.log(process===global.process);

console.log(process.argv);

console.log(process.execPath) */


//根据进程id强制关闭进程

/* console.log(process.kill(进程id编号)); */


/* queueMicrotask(() => {
    console.log('queueMicrotask');
});
new Promise((resolve, reject) => {
    resolve('执行')
}).then((text) => {
    console.log(text)
}); */

const buf = Buffer.from('hello 范德萨', 'base64');
console.log(buf)