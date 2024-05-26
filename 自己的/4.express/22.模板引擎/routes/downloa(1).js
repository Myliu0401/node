//导出处理请求的库
const express = require('express');

//路由
const router = express.Router();

//导入处理路径的库
const path = require('path');

router.get('/:fliename', (req, res, next) => {
    console.log('=======')

    //文件的位置
    const fliename = path.resolve(__dirname, '../download', req.params.fliename);

    res.download(fliename, req.params.fliename);
});


exports.dow = router;