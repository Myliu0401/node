//导入专门处理url的库
const url = require('url');

//导入专门处理图片的库
const Jimp = require('jimp');


//导入专门处理路径的库
const path = require('path');


//导出专门处理文件的库
const fs = require('fs');
const {
    async
} = require('validate.js');


//处理请求反爬的中间件
exports.Squareclimbing = async (req, res, next) => {
 console.log('11')
    
    //获取请求头的host属性 --- 请求的服务器的 域名和端口号
    const host = req.headers.host;

    //获取请求头的referer属性   ---- 为自己的源
    let referer = req.headers.referer;

    if (referer) {
        const urlobj = url.parse(referer)
        referer = urlobj.host;
    };

    const ps = ['.jpg', '.npg'];
    if (referer && referer !== host && ps.includes(path.extname(req.path))) {
        //不一样,也就是别的网站请求
        //对请求的图片进行加水印

        //补全路径
        const Mypath = path.resolve(__dirname, `../public${req.path}`);
        try {
            let obj = await fs.promises.stat(Mypath);
            if (!obj.isFile()) { //判断是否为文件
                throw '不是文件'
            };
            const pa = await chuli(Mypath, req);
           // console.log(pa.toString())
           // res.send(pa)
            // await lichu(Mypath)
            req.url = `/img/new.jpg`;
            next();
            return;
        } catch (err) {
            throw err
        }
    }

    next();

}

let boolean = true;

/**
 * 对请求的图片添加水印
 * @param {*} Mypath  水印图片
 */
async function chuli(Mypath, req) {
    // console.log(req.headers)
    if (boolean) {
        //水印图片
        const Watermark = path.resolve(__dirname, '../public/watermark/longmao.jpg');
        const shuiyin = await Promise.all([Jimp.read(Mypath), Jimp.read(Watermark)]);

        //对水印图片进行缩小
        await shuiyin[1].scale(0.2);

        //水印图的位置
        const x = shuiyin[0].bitmap.width - shuiyin[1].bitmap.width;
        const y = shuiyin[0].bitmap.height - shuiyin[1].bitmap.height;

        //在请求的图片上进行添加水印
        await shuiyin[0].composite(shuiyin[1], x, y, {
            mode: Jimp.BLEND_MULTIPLY,
            opacitySource: 0.5, //水印的透明度
        });

        const xp = path.resolve(__dirname, '../public/Addwatermark/', 'abc' + '.jpg');
        //将添加后的水印图片进行保存

      //  const shili = await shuiyin[0].writeAsync(xp,(err,value)=>{
      //      console.log('============')
      //  })
        boolean = false;
       return shuiyin[0].bitmap.data
    }
    
    return '';
};


async function lichu(Mypath) {
    const Watermark = path.resolve(__dirname, '../public/watermark/longmao.jpg');
    const xp = path.resolve(__dirname, '../public/Addwatermark/', 'abc' + '.jpg');
    Promise.all([Jimp.read(Mypath), Jimp.read(Watermark)]).then(async (data) => {
        //对水印图片进行缩小
        await data[1].scale(0.2);

        //水印图的位置
        const x = data[0].bitmap.width - data[1].bitmap.width;
        const y = data[0].bitmap.height - data[1].bitmap.height;

        await data[0].composite(data[1], x, y, {
            mode: Jimp.BLEND_MULTIPLY,
            opacitySource: 0.5, //水印的透明度
        });

        return data;
    }).then((data) => {
        data[0].write(xp)
    })
}