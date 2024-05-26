//执行时间类型的处理
require('./service/init.js');

//执行表与表的关联
require('./关联.js');

//导入服务层的学生接口
const Xobj = require('./service/操作学生.js');

Xobj.Axue({
    Xname: '刘与与',
    Xchushengdate: '2010-10-30',
    Xsex: true,
    Xdianhua: '12345678900',
    BanjiId:2,
    deletedAt:'2010-1-1'
}).then((data) => {
    console.log(data)
},(err)=>{//这个函数相当于捕获错误
    console.log(err)
})