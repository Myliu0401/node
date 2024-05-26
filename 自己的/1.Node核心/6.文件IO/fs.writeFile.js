const fs = require('fs'); //操作文件的模块
const path = require('path'); //操作路径的模块
const os = require('os');  //工具模块

const huanhan = os.EOL; //换行符,也就一行结束的分割符,不同操作系统不同
const lujin = path.resolve(__dirname, './naisi/2.txt'); //返回绝对路径
console.log(huanhan)

fs.writeFile(lujin, '撒玛丽卡', {
    encoding: 'utf-8',
    flag: 'a'
}, (err, value) => {
    console.log('写入成功', value)
});

async function xie() {
    await fs.promises.writeFile(lujin, huanhan+'1奈斯奈斯');
    console.log('写入成功1')
}
xie();