const sequelize = require('../index.js');

//导入数据类型
const {
    DataTypes
} = require('sequelize');

//定义模型 ---- 也就是表
const A = sequelize.define('A', {
    //定义模型属性
    name: {
        type: DataTypes.STRING, //数据类型
        allowNull: false //是否允许不填
    }
}, {
    freezeTableName: true, //强制模型名称等于表名 
    /* tableName:'' */ //直接提供表的名称
});

//同步模型  ---  相当于将上面创建好的模型同步到数据库中
A.sync({
    alter: true
}).then(() => {
    console.log('A模型同步成功')
});


module.exports = A;