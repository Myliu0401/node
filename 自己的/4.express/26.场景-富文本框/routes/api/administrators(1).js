const guanli = require('../../service/操作管理员.js');

const express = require('express');
const router = express.Router();

const asynFun = require('../Handlingasyn.js');


//jwt
const jwt = require('../jwt.js');


//导入加密函数
const session = require('express-session');




router.post('/Signin', asynFun.Handlingasyn(async (req, res, next) => {
    const obj = {
        Gzhanhao: req.body.Gzhanhao || '',
        Gmima: req.body.Gmima || ''
    }

    const shili = await guanli.Singlequery(obj);

    //对cookie的值进行加密
    /* let nai = encryption(req.body.Gzhanhao);

    if (shili) {
        res.cookie('token', nai, {
            path: '/',
            //signed:true
        });


        //向session对象添加,登录成功的信息
        req.session.shili = shili;
        console.log(req.session);


        res.header('authorization', nai);
        console.log('加密后令牌', nai)
        return shili
    } */



    //用jwt的方式来验证身份
    if (shili) {
        jwt.Awardjwt(res, 360 * 1000, req.body);
        return shili
    }

    throw '登录失败';
}));


//查询自己的信息
router.get('/whoami', asynFun.Handlingasyn(async (req, res, next) => {
    const obj = {
        Gzhanhao: req.shili.Gzhanhao,
        Gmima: req.shili.Gmima,
        boolean: true
    };
    return await guanli.Singlequery(obj);
}));


exports.Router = router;