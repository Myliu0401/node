/**
 * 模拟 urlencoded中间件函数
 * @param {*} options  配置对象   默认为对象 
 */
exports.urlencoded = (options = {}) => {
    options.type = options.type || 'application/x-www-form-urlencoded';
    return (res, req, next) => {
        if (res.headers["content-type"] === options.type) {
            let str = '';

            //流的方式读取请求体
            res.on('data', (chunk) => {
                str += chunk;
            });

            //读取完毕
            res.on('end', () => {
                //express是利用qs模块对请求体进行解析
                //res.body = str;

                res.body = analysis(str);
                next();
                console.log(123)
            });
        } else {
            next();
        }
    }
};

/**
 *  辅助函数,用于解析字符串
 *
 * @param {*} str  字符串
 */
function analysis(str) {
    const arr = str.split('&').map((el, index) => {
        return el.split('=');
    });

    let obj = {};

    arr.forEach((el, index) => {
        for (var i = 0; i < el.length; i++) {
            if (!obj[el[i]]) {
                obj[el[i]] = el[i + 1];
                break;
            } else {
                if (Object.prototype.toString.call(obj[el[i]]) === '[object Array]') {
                    obj[el[i]].push(el[i + 1])
                    break;
                } else {
                    let arr1 = [obj[el[i]], el[i + 1]];
                    obj[el[i]] = arr1;
                    break;
                }
            }
        }
    });

    return obj;

};