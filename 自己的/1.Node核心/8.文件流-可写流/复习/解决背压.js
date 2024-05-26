const fs = require('fs');

//创建写入流
const ws = fs.createWriteStream('./temp/1.text', {
    highWaterMark: 16
});
let i = 0;
let mi = true;

function xieru() {
    while (i < 1024 * 1024  /* && mi */ ) {
        i++;
        /* mi = */
        ws.write('上', 'utf-8', () => {

        });
    }
};

xieru();

/* ws.on('drain', () => {
    mi = true;
    xieru();
    console.log('背压已清空');
}); */
console.log('======')