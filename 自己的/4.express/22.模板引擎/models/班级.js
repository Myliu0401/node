const {
    DataTypes
} = require('sequelize');
const sequelize = require('./init.js');
const Xuesheng = require('./学生.js');

const Banji = sequelize.define('Banji', {
    Bname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Bkaibandate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    freezeTableName: true,
    paranoid: true,
});

//确立一对多的关系
Banji.hasMany(Xuesheng);

module.exports = Banji;