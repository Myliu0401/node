const Sdata = require('../spider/index.js');
const Shuji = require('../models/Book.js');

Sdata.then(async (data) => {
    await Shuji.bulkCreate(data);
    console.log('书籍添加完成')
});