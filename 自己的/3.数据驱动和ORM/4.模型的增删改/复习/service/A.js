const A = require('../models/A.js');

//添加值
/* async function tianjia() {
    const text = await A.create({
        name: '奈斯'
    });
    console.log(text.toJSON());
}

tianjia(); */


//查询
async function chax() {
    const text = await A.findAndCountAll({
        offset: 0,
        limit: 10
    });
    console.log(JSON.parse(JSON.stringify(text.rows)))
};

chax()