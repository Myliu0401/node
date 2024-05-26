const {
    async
} = require("validate.js");

/**
 * 正常的响应体格式
 * @param {*} code   响应码
 * @param {*} data   数据
 */
exports.Messagecode = function (code = 0, data = null) {
    return {
        code: code,
        msg: '',
        data: data
    }
};


