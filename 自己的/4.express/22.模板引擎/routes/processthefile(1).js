//这个模块是处理文件上传的

//导入专门处理请求的库
const express = require('express');

//路由
const router = express.Router();


//导入专门处理报文格式请求体的库
const multer = require('multer');

const path = require('path');


//导入处理图片的库
const Jimp = require('jimp');


const filename = path.resolve(__dirname, '../public/Addwatermark');


//配置上传文件的存储和命名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filename);
    },
    filename: function (req, file, cb) {
        const filename = `${new Date().getTime()}-${Math.random().toString(16).slice(-6)}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});


//获取upload对象
const upload = multer({
    storage: storage,
    /* dest: filename */
    limits: {
        // fileSize: 150 * 1024   //限制文件的大小
    },
    fileFilter: (req, file, cb) => {
        const hous = ['.jpg', 'png'];
        if (hous.includes(path.extname(file.originalname))) {
            cb(null, true);
            return;
        }
        cb(new Error('只能上传文件'));
    }
});


//只处理一个文件
router.post('/', upload.single('naisi'), async (req, res, next) => {
    const ni = await shuiyin(req.file.path);
    console.log(ni)
    res.send(JSON.stringify(ni));
});



/**
 *  
 */
async function shuiyin(src) {
    const lon = path.resolve(__dirname, '../public/watermark/12.jpg'); //原始图片1,做为水印
    const lon1 = path.resolve(src); //原始图片2

    const gi = new Date().getTime();

    const newmi = path.resolve(__dirname, '../public/img', `${gi}-new.jpg`); //原始1和原始2合成的图片

    return await chuliImg(lon, lon1, newmi, 20, '/img/' + `${gi}-new.jpg`);

};


/**
 *  添加图片水印
 * @param {*} img       原始图片
 * @param {*} img1      原始图片 --- 做为水印的图片
 * @param {*} newimg    添加水印后的图片保存的位置
 * @param {*} juli      距离右边距和下边距
 */
async function chuliImg(img, img1, newimg, juli = 20, naisi) {
    const Promises = await Promise.all([Jimp.read(img), Jimp.read(img1)]);


    //对水印图片进行缩放
    const Width = Promises[0].bitmap.width / Promises[1].bitmap.width;
    Promises[1].scale(Width / 2);

    //水印图片要放的位置
    const x = Promises[0].bitmap.width - juli - Promises[1].bitmap.width;
    const y = Promises[0].bitmap.height - juli - Promises[1].bitmap.height;

    //添加水印
    await Promises[0].composite(Promises[1], x, y, {
        mode: Jimp.BLEND_MULTIPLY,
        opacitySource: 0.5,
    });

    //将这张图片保存在哪
    await Promises[0].write(newimg);

    //将图片的路径返回出去后面要用到
    return naisi;
};



exports.Router = router;