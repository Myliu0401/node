const sequelize = require('./db.js');
const {
  DataTypes
} = require('sequelize');
console.log(DataTypes)
const guanli = sequelize.define('Guanliyuan', { //定义一张表
    //在这里定义模型属性,也就是列
    Gname: { //列
        type: DataTypes.STRING,
        allowNull: false,
    },
    Gzhanghao: { //列
        type: DataTypes.STRING,
        allowNull: false
    },
    Gmima: { //列
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true, //是否使用原名,也就是不想表名添加s
    deletedAt: '删除时间',
    paranoid: true, //从此以后,该表的数据不会真正的删除,而是增加一列deletedAt，记录删除的时间
});

module.exports = guanli;