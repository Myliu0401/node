//导入ORM框架并解构出 Sequelize类
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('mynaisi','root','123456123456',{
    host:'localhost', //域名
    dialect:'mysql' //数据库
});

module.exports = sequelize;