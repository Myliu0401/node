//导入 前端的ORM框架,解构出 Sequelize类
const {
    Sequelize
} = require('sequelize');

//导入日志记录处理
const objlogger = require('../logger.js');

//创建一个sequelize实例,这个实例会自动管理连接池 
const sequelize = new Sequelize('mynaisi', 'root', '123456123456', {
    host: 'localhost', //域名
    dialect: 'mysql', //数据库
    logging: (data) => { //日志记录
        //sequelize框架每执行一句sql语句,会运行该函数并且将sql语句做为参数,传进来


        //将sql语句记录到文件
        objlogger.logger.debug(data);
    }
});

module.exports = sequelize;