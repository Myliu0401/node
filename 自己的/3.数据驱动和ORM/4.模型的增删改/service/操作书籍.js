const Shuji = require('../models/书籍.js');

//添加书籍
exports.Ashuji = async function (shujiobj) {
    const naimi = await Shuji.create(shujiobj);
    naimi.toJSON()
};


//删除书籍
exports.Deleteshuji = async function (id) {
    await Shuji.destroy({
        where: id,
    })
};


//修改书籍
exports.Andern = async function (shujiobj, id) {
    await Shuji.update(shujiobj, {
        where: {
            id,
        }
    })
}