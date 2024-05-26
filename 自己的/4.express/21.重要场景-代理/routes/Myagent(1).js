//这个模块使用第三方库来专门处理代理


//导入专门处理代理的库
const {
    createProxyMiddleware
} = require('http-proxy-middleware');

//最终的服务器
const host = 'http://yuanjin.tech:5100';
const my = '/data';
module.exports = createProxyMiddleware('/data', {
    target: host,
    pathRewrite: function (path, req) {
        const mypath = path.substr(my.length);
        return mypath;
    }
});