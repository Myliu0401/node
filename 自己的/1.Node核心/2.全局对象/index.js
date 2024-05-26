
//全局对象
console.log(global);


//node里计时器返回的是一个对象
let tiemId = setTimeout(()=>{},100);
console.log(tiemId);

setImmediate(()=>{
    console.log('setImmediate相当于,一次性计时器0秒')
});


//目录地址
console.log(__dirname);

//当前的文件地址
console.log(__filename);

//命令行路径
console.log('当前命令行路径',process.cwd());


//获取命令行的所有参数
console.log(process.argv);


//获取当前的操作系统
console.log(process.platform);


//获取环境变量
console.log(process.env)


