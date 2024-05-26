//导入处理图片水印等等的库
const Jimp = require('jimp');


const path = require('path');



async function shuiyin() {
    const lon = path.resolve(__dirname, 'longmao.jpg'); //原始图片1,做为水印
    const lon1 = path.resolve(__dirname, '12.jpg'); //原始图片2
    const newmi = path.resolve(__dirname, 'new.jpg'); //原始1和原始2合成的图片

    chuliImg(lon, lon1, newmi);

};

shuiyin();


async function chuliImg(img, img1, newimg, juli = 20) {
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
    await Promises[0].write(newimg)

};