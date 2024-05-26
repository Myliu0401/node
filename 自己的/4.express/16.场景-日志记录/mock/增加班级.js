const Mock = require('mockjs');
const banji = require('../models/班级.js');

const data = Mock.mock({
    'datas|16':[
        {
            'id|+1':1,
            'Bname':'第 @id 班 ',
            'Bkaibandate':'@date()'
        }
    ]
});


/* console.log(data) */
console.log(data.datas)
banji.bulkCreate(data.datas);


exports.banji = data.datas;