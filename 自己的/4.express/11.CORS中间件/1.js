/* const { async } = require("validate.js");

async function mi(){
    throw 123
}
mi();
console.log('==========') */

//导入用于加密和解密的node内置库 crypto
const crypto = require('crypto');


//创建密钥
const secretkey = '9xwd7m6o8na9m3ec';

//创建iv向量,也就是,是字符串就可以
const vector = 'm46b02ugblr59gmc';

//加密
const cry = crypto.createCipheriv('aes-128-cbc', secretkey, vector);
/* const mi = */
cry.update('123456', 'utf-8', 'hex');
const mi = cry.final('hex');
console.log(mi, '--------------');

//解密
const go = crypto.createDecipheriv('aes-128-cbc', secretkey, vector);
/* const ko = */
go.update(mi, 'hex', 'utf-8');
const ko = go.final('utf-8')

console.log(ko, '==============')