const Jimp = require('jimp');
const path = require('path');
async function a() {
    const ni = path.resolve(__dirname, './微信图片.jpg');
    const ni1 = path.resolve(__dirname, './二维码1.png');

    const ni3 = path.resolve(__dirname, './nai.jpg');

    const shili = await Promise.all([Jimp.read(ni1), Jimp.read(ni)]);

    await shili[1].scale(0.1);

    await shili[0].scale(2);

    const x = shili[0].bitmap.width / 2 - (shili[1].bitmap.width / 2);
    const y = shili[0].bitmap.height / 2 - (shili[1].bitmap.height / 2);

    await shili[0].composite(shili[1], x, y, {
        opacitySource: 1
    });

    await shili[0].write(ni3);
    console.log('完成')
};

a()