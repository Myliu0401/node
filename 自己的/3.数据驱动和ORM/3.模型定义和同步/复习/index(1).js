//导入ORM框架
const {
    Sequelize
} = require('sequelize');

//链接数据库
const sequelize = new Sequelize('ABC','root','123456123456',{
    host: 'localhost', //域名
    dialect: 'mysql', //那种数据库,
    logging(mysql) { //没执行一次mysql语句,会执行该函数,并且将mysql语句作为参数传进来

    }
});

//测试是否连接成功
async function test() {
    try {
        await sequelize.authenticate();
        console.log('链接成功');
    } catch (error) {
        console.error('链接失败', error);
    }
};

test();


module.exports = sequelize;