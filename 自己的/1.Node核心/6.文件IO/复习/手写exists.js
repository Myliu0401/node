//导入文件处理模块
const fs = require('fs');

//导入路径处理模块
const path = require('path');


//路径补全函数
function pathCompletion(mypath) {
    return path.join(__dirname, mypath);
}


//判断文件或文件夹是否存在
async function DoesItExist(mypath, ismi) {
    try {
        //判断是否存在该文件或目录
        let fileInfo = await fs.promises.stat(mypath);
        return ismi ? fileInfo.isFile() : fileInfo.isDirectory();
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false
        }
        throw err;
    }
};


//初始化
async function init(mypath, ismi = false) {

    const Mypath = pathCompletion(mypath, ismi);
    const Pris = await DoesItExist(Mypath);
    if (Pris) {
        console.log(ismi ? '文件夹已存在无需创建' : '文件已存在无需创建');
        return;
    };
    if (ismi) { //创建文件 
        await fs.promises.writeFile(path.basename(Mypath), '');
        console.log('文件创建成功');
    } else { //创建文件夹
        await fs.promises.mkdir(Mypath);
        console.log('文件夹创建成功');
    }
};

init('misi');