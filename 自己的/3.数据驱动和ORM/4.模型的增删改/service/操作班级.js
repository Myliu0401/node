const Xuesheng = require('../models/学生.js');
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
}