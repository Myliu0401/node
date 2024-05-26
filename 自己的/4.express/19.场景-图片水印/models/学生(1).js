const sequelize = require('./init.js');
const {
    DataTypes
} = require('sequelize');

const moment = require('moment');

const Xuesheng = sequelize.define('Xuesheng', {
    Xname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Xchushengdate: {
        type: DataTypes.DATE,
        allowNull: false,
        get() { //访问器
            /* console.log(1) */
            return +this.getDataValue('Xchushengdate'); //返回时间戳
        }
    },
    age: { //虚拟字段
        type: DataTypes.VIRTUAL, //虚拟类型
        get() {
            /* console.log(2) */
            //返回出年龄
            return moment.utc().format('YYYY') - moment.utc(this.getDataValue('Xchushengdate')).format('YYYY');
        }
    },
    Xsex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Xdianhua: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
}, {
    freezeTableName: true,
    paranoid: true
});

module.exports = Xuesheng;