const sequelize = require('./init.js');
const { DataTypes } = require('sequelize');

const Xuesheng = sequelize.define('Xuesheng',{
    Xname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Xchushengdate:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    Xsex:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    Xdianhua:{
        type:DataTypes.STRING(11),
        allowNull:false
    },
},{
    freezeTableName:true,
    paranoid:true
});

module.exports = Xuesheng;