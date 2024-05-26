const fs = require('fs'); //导入跟文件打交道的模块

const path = require('path'); //导入对路径的操作的模块

//因为第一个参数如果是相对路径那么是相对于,命令行的,所以使用路径模块来操作
fs.readFile(path.resolve(__dirname, './naisi/1.txt'), (err, value) => {
    console.log(value.toString(),value)
});
fs.readFile(path.resolve(__dirname, './naisi/1.txt'), 'utf-8', (err, value) => {
    console.log(value)
});

const neiron = fs.readFileSync(path.resolve(__dirname, './naisi/1.txt'),'utf-8');
console.log(neiron);
console.log('===========');

async function p(){
  const k = await fs.promises.readFile(path.resolve(__dirname, './naisi/1.txt'),'utf-8');
  console.log(k,123)
}
console.log(p(),'-----') ;