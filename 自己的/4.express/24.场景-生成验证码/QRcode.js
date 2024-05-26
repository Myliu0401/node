//导入专门生成二维码的库
const QRcode = require('qrcode');

//生成为二维码图片
QRcode.toFile(__dirname+'filename.png', '有点小想你还莫吗', {
    version:40
}, (err) => {
    if (err) {
        console.log('发生错误');
        return;
    }
    console.log('完成');
});


//生成为dataurl
/* QRcode.toDataURL('去你妈的林茂威', (err, url) => {
    if(err){
        console.log('还是去你妈的林茂威');
        return ;
    }
    console.log(url);
}); */