const sequelize = require('./db.js');
const {
    DataTypes
} = require('sequelize');
const banji = require('./班级.js');
const xuesheng = sequelize.define('Xuesheng', {
    Xname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Xchushendate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Xsex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Xdianhua: {
        type: DataTypes.STRING(11),
        allowNull: true
    },

}, {
    paranoid: true,
    freezeTableName: true,
});
banji.hasMany(xuesheng); //一对多的关系
module.exports = xuesheng;