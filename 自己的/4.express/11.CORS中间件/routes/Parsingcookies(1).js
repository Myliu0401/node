//验证请求的api,因为不是所有api都要登录的
const miApi = [/* {
    mode: "GET",
    path: "/api/xuesheng"
},  */{
    mode: 'PUT',
    path: '/api/xuesheng/:id'
}, {
    mode: 'POST',
    path: "/api/xuesheng"
}, {
    mode: "GET",
    path: "/api/xuesheng/:id"
}];


//导入用于匹配路径的库
const {
    pathToRegexp
} = require('path-to-regexp');


//导入解密函数
const {
    decrypt
} = require('../util/secretkey.js');


//解析cookie
exports.jiexi = (req, res, next) => {
 
    //取出令牌
    let token = req.cookies.token;

    if (!token) { //判断是否有令牌
        //没有令牌,赋值除浏览器外的cookie,没有就为undefined

        token = req.headers.authorization;
    };


    //进行过滤掉不用登录的
    const s = miApi.filter((el, index) => {
        const zhen = pathToRegexp(el.path);
        return el.mode === req.method && zhen.test(req.path);
    });
   
    if (!s.length) { //不用登录
        next();
        return;
    };


    //再进行判断有没有令牌
    if (!token) {
        throw '没有登录'
    } else {
        //对象令牌进行解密
        const mi = decrypt(token);
       
        //将解密后的数据注入到req对象中,防止后续的中间件要用到
        req.linpai = mi
        console.log('解密后令牌', mi);
        next();
    }

}