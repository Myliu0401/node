//导入学生的模型,也就是学生列表
const Xuesheng = require('../models/学生.js');

//导入班级
const Banji = require('../models/班级.js');

//导入专门用于数据验证的库
const validate = require('validate.js');

//执行添加自定义规则函数
//require('../util/Customrules.js');

const Class = require('../models/班级.js');

//导入处理时间的库
const moment = require('moment');

//Sequelize 提供了多种运算符,提供多种运算
const {
    Op
} = require('sequelize');



const objguolv = require('../util/Filterproperties.js');

//添加学生
exports.Axue = async function (xueshengobj) {
    
    //进行属性过滤,防止添加不必要属性
    var xueshengobj = objguolv.XFilter(xueshengobj, 'Xname', 'Xsex', 'Xchushengdate', 'Xdianhua', 'BanjiId');

    // console.log(xueshengobj, '11111111111=========');

    //自定义规则函数
    validate.validators.classExits = async function (value) {

        const c = await Class.findByPk(value);
        if (c) {
            return;
        }
        //console.log(value,'-------------')
        return "is not exist";
    };

    //装验证规则的对象
    const yobj = {
        Xname: { //姓名的校验规则
            presence: {
                allowEmpty: false, //不能为空且不能是空对象、空数组、空字符串、空白字符串
            },
            type: 'string', //值的类型只能是字符串
            length: {
                minimum: 2, //最小长度为2
                maximum: 5, //最大长度为5
            },
        },
        Xchushengdate: { //出生时间的校验规则
            presence: {
                allowEmpty: false,
            },
            datetime: {
                earliest: moment.utc().subtract(50, 'y'), //最早时间不能早于这个时间, 不能早于50年前
                latest: moment.utc().subtract(10, 'y'), //最晚时间不能晚于这个时间, 不能晚于 10 年前
                dateOnly: true, //只允许日期
            }
        },
        Xsex: {
            presence: {
                allowEmpty: false,
            },
            type: 'boolean',
        },
        Xdianhua: {
            presence: {
                allowEmpty: false,
            },
            format: /1\d{10}/
        },
        BanjiId: { //但是这个属性是外键,必须判断与这张表连接的表是否有这个验证数据的值
            presence: {
                allowEmpty: false
            },
            numericality: { //类型,但是这个规则可以设置其他约束
                strict: true, //开启严格匹配
                onlyInteger: true //必须使用整数
            },

            //使用自定义规则函数,在函数里处理验证与其连接的表,自定义规则必须在使用规则前面设置好,不然执行到这里还没有自定义规则函数
            classExits: true
        }
    };

    //进行验证
    await validate.async(xueshengobj, yobj); //异步的


    //同步函数 const tu = validate.validate(xueshengobj, yobj);

    //  console.log(tu, '----')

    const naimi = await Xuesheng.create(xueshengobj);
    return naimi.toJSON()

};


//删除一个学生
exports.deletexue = async function (id) {
    const naimi = await Xuesheng.findByPk(id);
    console.log(naimi)
    if (naimi) {
        return await Xuesheng.destroy({
            where: {
                id: id
            }
        });
    }
    throw '找不到该学生进行删除'

}


//修改一个学生
exports.Andernxue = async function (xueshengobj, id) {

    const shili = await Xuesheng.findByPk(id);

    if (shili) {
        return await Xuesheng.update(xueshengobj, {
            where: {
                id,
            }
        })
    } else {
        throw '找不到该学生进行修改'
    }



};



/**
 * 查询多个学生
 * @param {*} page      第几页
 * @param {*} limit     取几条数据
 * @param {*} sex       性别
 * @param {*} name      姓名
 */
exports.Multiple = async function (page = 1, limit = 10, sex = -1, name = '') {
    //对姓名进行判断,是否要进行模糊判断,还是全名判断。
    const obj = {};
    if (name && name.length === 1) {
        //进行模糊判断
        obj.Xname = {
            [Op.like]: `%${name}%`
        }
    } else if (name && name.length > 1) {
        //进行全名判断
        obj.Xname = name;
    }


    const datas = await Xuesheng.findAll({
        where: {
            Xsex: !!sex, //两次取反,变为正常的布尔
            ...obj //没传有姓名就不对姓名作为查询条件
        },

        //附加条件进行分页
        offset: (page - 1) * limit,
        limit: limit
    });

    //查询总数
    const num = await Xuesheng.count({
        where: {
            Xsex: !!sex,
            ...obj
        }
    });

    return {
        total: num,
        data: JSON.parse(JSON.stringify(datas))
    };
};


/**
 * 另一个查询多个学生的方法 
 * @param {*} page        第几页   
 * @param {*} limit       取几条数据 
 * @param {*} sex         性别 
 * @param {*} name        姓名 
 */
exports.Themultiple = async function (page = 1, limit = 10, sex = -1, name = '') {
    //对姓名进行判断,是否要进行模糊判断,还是全名判断。
    const obj = {};
    if (name && name.length === 1) {
        //进行姓名模糊判断
        obj.Xname = {
            [Op.like]: `%${name}%`
        }
    } else if (name && name.length > 1) {
        //进行姓名全名判断
        obj.Xname = name
    };


    //查询
    const datas = await Xuesheng.findAndCountAll({
        where: {
            Xsex: !!Number(sex), //两次取反,变成正常的布尔
            ...obj //没传有姓名就不对姓名作为查询条件
        },
        attributes: ['id', 'Xname', 'Xsex', 'Xchushengdate', 'age'], //只选择这些属性
        offset: (page - 1) * limit,
        limit: limit,
        include: [Banji] //关联的表
    });

    return {
        total: datas.count, //查询到的总数
        data: JSON.parse(JSON.stringify(datas.rows)), //查询到的数据
    };
};




//根据学生的id获取学生
exports.Single = async function (Xid) {
    const shili = await Xuesheng.findByPk(Xid);
    if (shili) {
        return shili.toJSON();
    }
    return null;
}