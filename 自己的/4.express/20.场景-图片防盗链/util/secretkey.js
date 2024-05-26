//可以利用这种方法来创建一个16位字节的字符串
const miyao = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

//导入用于加密和解密的node内置库 crypto
const crypto = require('crypto');


//创建密钥
const secretkey = '9xwd7m6o8na9m3ec';

//创建iv向量,也就是,是字符串就可以
const vector = 'm46b02ugblr59gmc';


/**
 * 创建加密函数
 * @param {*} str  要加密的数据
 */
exports.encryption = (str) => {

    //创建处理加密的对象
    const minai = crypto.createCipheriv('aes-128-cbc', secretkey, vector);

    //对数据进行加密
    let data = minai.update(str, 'utf-8', 'hex');


    //拼接成完整的加密后的数据
    data += minai.final('hex');

    return data;
};


/**
 * 创建解密函数
 * @param {*} str 要解密的数据
 */
exports.decrypt = (str) => {

    //创建处理解密的对象
    const naimi = crypto.createDecipheriv('aes-128-cbc', secretkey, vector);

    //对数据进行解密
    let data = naimi.update(str, 'hex', 'utf-8'); //因为加密后的数据是16进制编码的,所以解密的数据类型为16进行编码
    //因为加密前的数据是utf-8编码的,所以解密的数据以utf-8编码输出
  

    //拼接成完整的解密后的数据
    data += naimi.final('utf-8');

    return data;
};