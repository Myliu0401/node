//导入处理请求的库
const express = require('express');

//路由
const router = express.Router();

//导入专门生成二维码的库
const svgCaptcha = require('svg-captcha');

const path = require('path');

//配置验证码字体
svgCaptcha.loadFont(path.resolve(__dirname, './华康翩翩.ttf'));

//生成验证码中间件
async function Ver(req, res, next) {

    const captcha = await svgCaptcha.create({ //配置验证码
        color: true,
        size: 5,
        noise: 5
    });

    //存储验证码文本
    req.session.captcha = captcha.text;

    //设置响应体类型
    res.type('svg');

    //发回数据
    res.send(captcha.data);

};

function Verifylogin(req, res, next) {
    //给session对象添加数组用于存储请求的时间,要用于判断次数
    if (!req.session.records) {
        //只给第一次登陆时加
        req.session.records = [];
    };

    //创建时间戳
    const now = new Date().getTime();

    //添加时间戳
    req.session.records.push(now);

    //10秒内不能登陆超过3次
    const Tiem = 10000; //以豪秒为单位
    const ci = 3;

    //过滤10秒内登录的次数
    req.session.records = req.session.records.filter((el, index) => {
        return now - el <= Tiem;
    });


    if (req.session.records.length >= ci || 'create' in req.body) {
        //生成验证码
        yanzhen(req, res, next);
        return;
    };

    next();

};

function yanzhen(req, res, next) {
    const naima = req.body.create ? req.body.create.toLowerCase() : '';

    //10秒内登录次数超过3次
    if (!naima) {
        const obj = {
            code: 401,
            data: '请输入验证码'
        };
        res.send(obj);
        return;
    };

    /* console.log(req.session.captcha.toLowerCase(), naima) */

    req.session.captcha.toLowerCase() === naima ? next() : res.send({
        code: 401,
        data: '请输入正确的验证码'
    });

    //必须清空保存的验证码文本,防止机器提交使用原先的验证码,直接被破解
    req.session.captcha = '..';
};

router.post('*', Verifylogin);

router.get('/create', Ver);


exports.Ver = router;