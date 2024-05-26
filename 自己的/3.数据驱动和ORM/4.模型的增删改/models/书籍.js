const sequelize = require('./init.js');
const {
    DataTypes
} = require('sequelize');

const Shuji = sequelize.define('Shuji', {
    Sname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Simg: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Schubandate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Szuozi: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    paranoid: true,
});

module.exports = Shuji;