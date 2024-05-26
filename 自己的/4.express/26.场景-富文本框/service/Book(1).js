const Shuji = require('../models/Book.js');

const {
    Op
} = require('sequelize');

//添加书籍
exports.Ashuji = async function (shujiobj) {
    const naimi = await Shuji.create(shujiobj);
    return naimi.toJSON()
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
};


/**
 * 根据书籍的id获取书籍
 * @param {*} Bid  书籍的id
 */
exports.Idbook = async function (Bid) {
    const shili = await Shuji.findByPk(Bid);
    if (shili) {
        return shili.toJSON();
    }
    return null
};



/**
 * 根据书籍的信息和分页来获取书籍
 * @param {*} page        第几页
 * @param {*} limit       取几条数据
 * @param {*} name        书名
 * @param {*} author      作者
 */
exports.Paginationbooks = async function (page = 1, limit = 10, name = '', author = '') {
    //对书名和作者进行判断
    let obj = {};
    if (name.length < 2 && author.length < 2) {
        //进行“或者”的条件和模糊处理
        obj = {
            [Op.or]: [{
                    Sname: {
                        [Op.like]: `%${name}%`
                    }
                },
                {
                    Szuozi: {
                        [Op.like]: `%${author}%`
                    }
                }
            ]
        }
    } else if (name.length > 1 && author.length > 1) {
        //进行模糊处理
        obj.Sname = {
                [Op.like]: `%${name}%`
            },
            obj.Szuozi = {
                [Op.like]: `%${author}%`
            }
    };

    const shilis = await Shuji.findAndCountAll({
        where: {
            ...obj
        },
        offset: (page - 1) * limit,
        limit: limit,
        attributes: ['Sname', 'Schubandate', 'Szuozi']
    });

    return {
        total: shilis.count,
        datas: JSON.parse(JSON.stringify(shilis.rows))
    }
};