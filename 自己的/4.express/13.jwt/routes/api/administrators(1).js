const guanli = require('../../service/操作管理员.js');

const express = require('express');
const router = express.Router();

const asynFun = require('../Handlingasyn.js');


//导入加密函数
const {
    encryption
} = require('../../util/secretkey.js');
const session = require('express-session');



router.post('/Signin', asynFun.Handlingasyn(async (req, res, next) => {

    const shili = await guanli.Singlequery(req.body);

    //对cookie的值进行加密
    let nai = encryption(req.body.Gzhanhao);

    if (shili) {
        res.cookie('token', nai, {
            path: '/',
            /* signed:true */
        });


        //向session对象添加,登录成功的信息
        req.session.shili = shili;
        console.log(req.session);


        res.header('authorization', nai);
        console.log('加密后令牌', nai)
        return shili
    }
    throw '登录失败';
}));


exports.Router = router;