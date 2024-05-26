//导入专门处理请求的库
const express = require('express');

//导入学分的模块
const xuesheng = require('../../service/操作学生.js');

//导入响应体格式函数
const xianyin = require('../MessageMaFormat.js');


const asynFun = require('../Handlingasyn.js');




//路由中间件
const router = express.Router();

//获取分页学生
router.get('/', async (res, req, next) => {

    //进行判断请求有没有传参数过来
    const page = res.query.page || 1;
    const limit = res.query.limit || 10;
    const sex = res.query.sex || -1;
    const name = res.query.name || '';



    //查询
    const shili = await xuesheng.Themultiple(page, limit, sex, name);

    //返回响应
    req.send(xianyin.Messagecode(0, shili));

    /* console.log(res.path, res.baseUrl)
    req.send('分页获取学生'); */
});


//获取单个学生
router.get('/:id', async (res, req, next) => {
    const shili = await xuesheng.Single(res.params.id);

    if (shili) {
        req.send(xianyin.Messagecode(0, shili));
    } else {
        next(`没有这个id为 ${res.params.id} 的学生`); //因为在异步函数报错,express不支持异步函数里报错自动捕获给处理错误的中间件,所以只能手动提交

    }
});




//添加学生
router.post('/', asynFun.Handlingasyn(async (res, req, next) => {
    return await xuesheng.Axue(res.body);
}));


//express不支持异步函数里报错自动捕获给处理错误的中间件 的原因
/* router.post('/', async (res, req, next) => {
    await xuesheng.Axue(res.body).then(() => {}, (err) => {
        console.log(err)
        req.send(xianyin.Messagecode(0, err))
    });
}); */


//删除一个学生
router.delete('/:id', async (res, req, next) => {
    // console.log(res.params.id)
    try {
        const shili = await xuesheng.deletexue(res.params.id);
        req.send(xianyin.Messagecode(0, shili))
    } catch (err) {
        next(err)
    }



});


//修改学生
router.put('/:id', asynFun.Handlingasyn(async (res, req, next) => {
    return await xuesheng.Andernxue(res.body, res.params.id);
}));


exports.Router = router;