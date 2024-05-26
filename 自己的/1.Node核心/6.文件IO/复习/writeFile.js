const fs = require('fs');




//读取
//fs.readFile('./1.jpg', (err, value) => {
//    console.log(1)
//    xieru(value);
//});
//
//
//function xieru(value) {
//    //写入
//    fs.writeFile('./2.jpg', value, 'base64', (err) => {
//        console.log(err)
//    });
//};


fs.writeFile('./a/b', '', (err) => {
    console.log(err)
});