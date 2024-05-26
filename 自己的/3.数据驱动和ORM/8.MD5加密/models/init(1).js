//导入 前端的ORM框架,解构出 Sequelize类
const {
    Sequelize
} = require('sequelize');


//创建一个sequelize实例,这个实例会自动管理连接池 
const sequelize = new Sequelize('mynaisi', 'root', '123456123456', {
    host: 'localhost', //域名
    dialect: 'mysql' //数据库
});

module.exports = sequelize;