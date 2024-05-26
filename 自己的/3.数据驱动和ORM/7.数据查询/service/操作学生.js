//导入学生的模型,也就是学生列表
const Xuesheng = require('../models/学生.js');

//导入班级
const Banji = require('../models/班级.js');

//Sequelize 提供了多种运算符,提供多种运算
const {
    Op
} = require('sequelize');

//添加学生
exports.Axue = async function (xueshengobj) {

    const naimi = await Xuesheng.create(xueshengobj);
    return naimi.toJSON()

};


//删除一个学生
exports.deletexue = async function (id) {
    const naimi = await Xuesheng.findByPk(id);
    naimi.destroy()
}


//修改一个学生
exports.Andernxue = async function (xueshengobj, id) {
    await Xuesheng.update(xueshengobj, {
        where: {
            id,
        }
    })

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
            Xsex: !!sex, //两次取反,变成正常的布尔
            ...obj //没传有姓名就不对姓名作为查询条件
        },
        attributes: ['id', 'Xname', 'Xsex'], //只选择这些属性
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