const miobj = require('./MessageMaFormat.js')

/**
 *   处理验证库不兼容异步函数里报错自动执行next函数
 * @param {*} asynFun  异步函数
 */
exports.Handlingasyn = function (asynFun) {
    return async (res, req, next) => {
        try {
            const shili = await asynFun(res, req, next);
            req.send(miobj.Messagecode(0, shili));
        } catch (err) {
            next(err);
        }
    }
};