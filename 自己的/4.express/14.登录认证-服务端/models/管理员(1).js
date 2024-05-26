//导入数据库链接,也就是已经与数据库链接的 sequelize实例
const sequzlize = require('./init.js');

//导入数据类型的类,在这个类上有静态方法
const {
    DataTypes
} = require('sequelize')

//定义模型,向 sequzlize实例(相当于数据库)里,创建一张表
const Guanli = sequzlize.define('Guanli', {
    //这个定义模型中的属性,相当于表中的列,主键也就是id键,会自动创建并且是自动递增
    Gzhanhao: { //对象的属性名会作为表里的属性名
        type: DataTypes.STRING,
        allowNull: false,
    },
    Gmima: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gname: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    freezeTableName:true, //使用原名,不添加s
    paranoid:true, 
}); //sequzlize实例 中也会有这张表

//将这张表导出
module.exports = Guanli;