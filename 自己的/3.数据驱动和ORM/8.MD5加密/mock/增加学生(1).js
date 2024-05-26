const Mock = require('mockjs');
const xuesheng = require('../models/学生.js');
const banji = require('../models/班级.js');

const data = Mock.mock({
    'datas|200-400': [{
        'id|+1': 1, //表示属性名id,值每次都加1
        'Xname': '@cname()@clast', //自动生成人名的属性值
        'Xchushengdate': '@date', //自动生成时间
        'Xsex|1-2': true, //自动生成布尔
        'Xdianhua': /1\d{10}/, //自动以正则表达式来生成对应的值
        /* 'Xdizhi':'@county(true)' */ //自动生成地址
        'BanjiId|1-16': 1,
    }]
});

exports.xuesheng = data.datas;

banji.hasMany(xuesheng);
xuesheng.belongsTo(banji);

xuesheng.bulkCreate(data.datas);