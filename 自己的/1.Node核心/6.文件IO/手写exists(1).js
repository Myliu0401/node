const fs = require('fs');
const path = require('path');


const lujin = path.resolve(__dirname, './naisi/jpg/vv'); //绝对路径

//手写exists
async function myexists(mylujin) {
    try {
        await fs.promises.stat(mylujin); //获取该目录的信息,如果获取不到就报错
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') { //该目录不存在   ENOENT这个表示不存在
            return false;
        };
        throw err;
    }
}

async function paduna(lujin1) {
    const bo = await myexists(lujin1);
    if (bo) {
        console.log('目录已存在无需新建')
    } else {
        await fs.promises.mkdir(lujin1);
        console.log('目录创建成功')
    }
}
paduna(lujin);