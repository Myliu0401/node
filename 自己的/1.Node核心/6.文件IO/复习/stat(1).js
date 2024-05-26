//导入转换函数模块
const util = require('util');

//导入文件模块
const fs = require('fs');


const mystat = util.promisify(fs.stat);

mystat('../复习').then((value)=>{
   console.log(value)
}).catch((err)=>{
    console.log(err)
})