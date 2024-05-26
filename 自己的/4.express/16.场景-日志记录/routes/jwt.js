//密钥
const secret = 'liuyulian';

//cookie键名
const key = 'token';

//导入处理jwt库
const jwt = require('jsonwebtoken');

/**
 * //颁发jwt
 * @param {*} res       为响应对象
 * @param {*} Maxdate   jwt过期时间
 * @param {*} payload   payload对象
 */
exports.Awardjwt = function (res, Maxdate = 365 * 1000, payload = {}) {
    //创建jwt
    const token = jwt.sign(payload, secret, {
        expiresIn: Maxdate
    });

    //颁发,也就是响应给客户端
    //cookie形式 ---- 因为浏览器对cookie有完善的机制
    res.cookie(key, token, {
        path: '/',
        maxAge: Maxdate
    });

    //添加其他传输
    res.header('authorization', token);

};


/**
 * 验证jwt
 * @param {*} req   为请求对象
 */
exports.verification = function (req) {

    //取出jwt
    let myToken = req.cookies[key];

    //判断cookie中是否有jwt
    if (!myToken) {
        //尝试取authorization的
        myToken = req.headers['authorization'];

        if (!myToken) { //还是没有jwt
            return null;
        };

        //对authorization形式的规范进行判断
        const s = myToken.split(' ');
        myToken = s.length === 1 ? s[0] : s[1];

    }
   // console.log(myToken);
    try {
        const shili = jwt.verify(myToken, secret); //验证不通过会报错
        return shili;
    } catch (err) {
        return null;
    }
}