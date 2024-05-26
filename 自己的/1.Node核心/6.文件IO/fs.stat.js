const fs = require('fs'); //操作文件的模块
const path = require('path'); //路径模块

const lujin = path.resolve(__dirname, './naisi/jpg/1.jpg'); //绝对路径

fs.stat(lujin, (err, value) => {
    console.log(value)   
});

async function xinxi() {
    const xin = await fs.promises.stat(lujin);
    console.log(xin,new Date(xin.birthtime).toLocaleDateString());
    console.log('是否是目录:',xin.isDirectory());
    console.log('是否是文件:',xin.isFile());
};

xinxi();