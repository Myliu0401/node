//导入学生的模型,也就是学生列表
const Xuesheng = require('../models/学生.js');

//添加学生
exports.Axue = async function (xueshengobj) {

    const naimi = await Xuesheng.create(xueshengobj);
    return naimi.toJSON()

};


//删除一个学生
exports.deletexue = async function (id) {
    const naimi = await Xuesheng.findByPk(id);
    if (naimi) {
       return naimi.destroy()
        /* return await Xuesheng.destroy({
            where: {
                id: id
            }
        }); */
    }
    throw '找不到该学生进行删除'
}


//修改一个学生
exports.Andernxue = async function (xueshengobj, id) {
    await Xuesheng.update(xueshengobj, {
        where: {
            id,
        }
    })

}