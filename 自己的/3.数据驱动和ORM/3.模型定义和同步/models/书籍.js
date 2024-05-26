const sequelize = require('./db.js');

const {
    DataTypes
} = require('sequelize');

const shuju = sequelize.define('Shuji', {
    Sname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Simg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Schuban: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    Szuozi: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    paranoid: true,
});

module.exports = shuju;