//导出数据验证库

const validate = require('validate.js'); //因为有缓存机制,所以同个模块不会执行两次

const obj = require('../service/操作班级.js');


/**
 * 自定义规则函数
 * @param {*} value 验证数据的值 
 */
validate.validators.classExits = async function (value) {
    const shili = await obj.Singleclass(value);
    if(shili){
        console.log('来了')
        return;
    }
    return 'is not exist';
}