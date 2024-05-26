const fs = require('fs'); //操作文件模块
const path = require('path'); //操作路径模块


/**
 * 创建一个对象,里面包含相应的信息 
 * 
 * @class File
 */
class File {
    /**
     *Creates an instance of File.
     * @param {*} filename          路径
     * @param {*} name              文件名
     * @param {*} ext               后缀
     * @param {*} isFile            是否是一个文件
     * @param {*} size              字节
     * @param {*} createTime        日期对象,创建的时间
     * @param {*} updateTime        日期对象,修改的时间
     * @memberof File
     */
    constructor(filename, name, ext, isFile, size, createTime, updateTime) {
        this.filename = filename;
        this.name = name;
        this.ext = ext;
        this.isFile = isFile;
        this.size = size;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }


    static async getFile(lujin) {
        //获取文件或目录的信息
        const xinxi = await fs.promises.stat(lujin); //信息对象
        const name = path.basename(lujin); //文件名
        const ext = path.extname(lujin); //后缀名
        const isFile = xinxi.isFile(); //是否为文件
        const size = xinxi.size; // 字节
        const createTime = new Date(xinxi.birthtime); //时间对象,创建的时间
        const updateTime = new Date(xinxi.mtime); //时间对象,上次被修改的时间
        return new File(lujin, name, ext, isFile, size, createTime, updateTime);
    };

    async getChildren() {
        if (this.isFile) {
            return [];
        }
        let children = await fs.promises.readdir(this.filename); //获取所有子目录和子文件
        children = children.map((el, index) => {
            const lujin = path.resolve(this.filename, el);
            return File.getFile(lujin);
        });
        return Promise.all(children);
    };

    async getContent(isBuffer = false) {
        if (!this.isFile) {
            return null;
        }
        if (!isBuffer) {
            return await fs.promises.readFile(this.filename, 'utf-8')
        } else {
            return await fs.promises.readFile(this.filename);
        }

    }
}
const mylujin = path.resolve(__dirname, './naisi/');

async function pl() {
    const p = await File.getFile(mylujin);
    const lp = await p.getChildren();
    console.log(await lp[2].getChildren())
    console.log(await lp[0].getContent())
}

pl();