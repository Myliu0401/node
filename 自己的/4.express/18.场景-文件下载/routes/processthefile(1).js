//这个模块是处理文件上传的

//导入专门处理请求的库
const express = require('express');

//路由
const router = express.Router();


//导入专门处理报文格式请求体的库
const multer = require('multer');

const path = require('path');

const filename = path.resolve(__dirname, '../public/img');


//配置上传文件的存储和命名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filename);
    },
    filename: function (req, file, cb) {

        const filename = `${new Date().getTime()}-${Math.random().toString(16).slice(-6)}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});


//获取upload对象
const upload = multer({
    storage: storage,
    /* dest: filename */
    limits: {
        fileSize: 150 * 1024
    },
    fileFilter: (req, file, cb) => {
        const hous = ['.jpg', 'png'];
        if (hous.includes(path.extname(file.originalname))) {
            cb(null, true);
            return;
        }
        cb(new Error('只能上传文件'));
    }
});


//只处理一个文件
router.post('/', upload.single('naisi'), (req, res, next) => {
    res.send(JSON.stringify(`/img/${req.file.filename}`));
});


exports.Router = router;