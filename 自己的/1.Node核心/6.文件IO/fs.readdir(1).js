const fs = require('fs'); //操作文件的模块
const path = require('path'); //操作路径的模块

const lujin = path.resolve(__dirname,'./naisi/');

fs.readdir(lujin,(err,value)=>{
    console.log(typeof(value[0]) );
});

async function mulu(){
   const mu = await fs.promises.readdir(lujin);
   console.log(mu);
}
mulu();