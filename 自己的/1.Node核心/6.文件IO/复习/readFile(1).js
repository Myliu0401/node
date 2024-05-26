//导入处理文件的模块
const fs = require('fs');

//导入处理路径的模块
const path = require('path');

fs.readFile('./1.html','utf-8',(err,value)=>{
    console.log(value)
})