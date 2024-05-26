const sequelize = require('./db.js');
const {
    DataTypes
} = require('sequelize');
const banji = sequelize.define('Banji', {
    Bname: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Bkaiban:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
},{
    freezeTableName:true,
    paranoid:true,
});

module.exports = banji;

