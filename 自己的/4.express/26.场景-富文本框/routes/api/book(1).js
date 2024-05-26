//导入处理请求的库
const express = require('express');

//导入数据的模块
const book = require('../../service/Book.js');

//路由
const router = express.Router();


const asynFun = require('../Handlingasyn.js');

//添加书籍
router.post('/', asynFun.Handlingasyn(async function (req, res, next) {
    console.log(req.body)
    return await book.Ashuji(req.body);
}));


//查看书籍
router.get('/:id', asynFun.Handlingasyn(async function (req, res, next) {
    return await book.Idbook(req.params);
}));


exports.book = router;