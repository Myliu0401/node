const Mock = require('mockjs');
const Guanli = require('../models/管理员.js');

const data = Mock.mock({
    'datas|6': [{
        'id|+1': 1,
        'Gzhanhao':/\d{11}/,
        'Gmima': /\w{8,12}/,
        'Gname':'@cname()@clast'
    }]
});

/* console.log(data) */

Guanli.bulkCreate(data.datas);


exports.guanli = data.datas;