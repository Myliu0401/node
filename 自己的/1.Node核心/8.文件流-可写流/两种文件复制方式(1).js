const fs = require('fs');
const path = require('path');

//方式一
async function fuzhu1() {
    const filename = path.resolve(__dirname, './temp/2.txt'); //取文件内容
    const filename1 = path.resolve(__dirname, './temp/3.txt'); //将取到的内容放到这个文件
    console.time('方式一')
    const neiron = await fs.promises.readFile(filename);
    await fs.promises.writeFile(filename1, neiron);
    console.timeEnd('方式一')
}

/* fuzhu1(); */


//方式二
async function fuzhu2() {
    const filename = path.resolve(__dirname, './temp/2.txt'); //取文件内容
    const filename1 = path.resolve(__dirname, './temp/3.txt'); //将取到的内容放到这个文件
    console.time('方式二');
    const rs = fs.createReadStream(filename); //文件可读流
    const ws = fs.createWriteStream(filename1); //文件可写流
    rs.on('data', (value) => {
        const bo = ws.write(value);
        if (!bo) { //管道已满
            rs.pause(); //停止读取
        }
    });

    ws.on('drain', () => { //管道已空
        rs.resume(); //恢复读取
    });

    rs.on('end',()=>{ //全部读取完毕
        ws.end(); //关闭文件   ------------------ 当前管道清空后才会关闭
        console.timeEnd('方式二')
    })
};

fuzhu2()