const Banji = require('../models/班级.js');

//添加班级
exports.Abanji = async function (banjiobj) {
    const naimi = await Banji.create(banjiobj);
    return naimi.toJSON();
};


//删除班级
exports.Deletebanji = async function (id) {
    await Banji.destroy({
        where: id
    })
};


//修改班级
exports.Andernbanji = async function (banjiobj, id) {
    await Banji.update(banjiobj, {
        where: {
            id,
        }
    })
};


/**
 *   查询所有班级
 */
exports.Allclasses = async function () {
    const s = await Banji.findAndCountAll();
    return {
        total: s.count,
        data: JSON.parse(JSON.stringify(s.rows))
    }
};

/**
 *   根据班级id查询班级
 */
exports.Singleclass = async function (Bid){
    const shili = await Banji.findByPk(Bid);
    if(shili){
        return shili.toJSON()
    }
    return null
};