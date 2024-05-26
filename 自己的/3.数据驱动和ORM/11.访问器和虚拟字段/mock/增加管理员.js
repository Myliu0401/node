const Mock = require('mockjs');

const data = Mock.mock({
    'datas|6': [{
        'id|+1': 1,
        'Gzhanhao':/\d{11}/,
        'Gmima': /\w{8,12}/,
        'Gname':'@cname()@clast'
    }]
});

/* console.log(data) */
exports.guanli = data.datas;