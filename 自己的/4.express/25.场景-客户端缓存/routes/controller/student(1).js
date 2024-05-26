//导入处理请求的库
const {
    constants
} = require('buffer');
const express = require('express');

//路由
const router = express.Router();

const Xuesheng = require('../../models/学生.js');

router.get('/', async (req, res, next) => {
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    console.log(req.query)
    const shili = await Xuesheng.findAndCountAll({
        where: {

        },
        offset: (page - 1) * limit,
        limit: limit
    });

    res.render("./student.ejs", {
        numder: '123456',
        total: shili.count,
        page: page,
        limit: limit,
        datas: JSON.parse(JSON.stringify(shili.rows))
    });
});


module.exports = router;