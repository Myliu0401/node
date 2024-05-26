//导入验证数据的库
const validate = require('validate.js');

//导入处理时间的库
const moment = require('moment');

validate.extend(validate.validators.datetime, {
    /**
     * 当验证到这个数据是会触发这个函数
     * 这个函数需要将数据转换为时间戳并返回,如果没法转换必须返回NaN
     * @param {*} valeu     要转换的值
     * @param {*} options   针对某个属性的验证配置
     */
    parse(valeu, options) {
       console.log('parse=========')
        //令牌
        let linpai = ['YYYY-MM-DD HH:mm:ss', 'YYYY-M-D H:m:s', 'x']; //只允许这种时间格式

        if (options.dateOnly === true) {
            //只允许日期
            linpai = ['YYYY-MM-DD', 'YYYY-M-D', 'x'];
        };

        return moment.utc(valeu, linpai, true).valueOf(); //转为时间戳
    },


    /**
     * 用户显示错误消息时，使用的显示字符串
     * 返回友好的时间格式
     * @param {*} value
     * @param {*} options
     */
    format(value, options) {
        console.log('format==========',moment(value).toString() )
        let shijian = 'YYYY-MM-DD';
        if (options.dateOnly !== true) {
            shijian += ' HH:mm:ss'
        };
        return moment.utc(value).format(shijian);
    }
});