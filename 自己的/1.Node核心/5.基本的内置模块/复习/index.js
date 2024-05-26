console.log('==============os=====================');
//os模块 操作系统的相关信息的模块
const OS = require('os');

//一行结束的分隔符
console.log(OS.EOL);

//cpu的架构位
console.log(OS.arch());

//cpu的线程
console.log(OS.cpus().length);

//操作系统空闲的内存量
console.log(OS.freemem());

//用户目录
console.log(OS.homedir());

//操作系统的主机名
console.log(OS.hostname());

//操作系统默认临时目录
console.log(OS.tmpdir());

console.log('======================path===================')
//path模块 路径模块
const path = require('path');

console.log(path.basename('C://xxx/xxx/123.html'));

console.log(path.basename('C://xxx/xxx/123.html', '.HTML')); //匹配不上

console.log(path.basename('C://xxx/xxx/123.html', '.html')); //匹配上

//分割符
console.log(path.sep);

//环境变量的分割符
console.log(path.delimiter);

//返回参数中文件夹的部分
console.log(path.dirname('xxx/xxx/xxxa/123.html'));

//返回参数中文件夹里文件的后缀名
console.log(path.extname('xxx/aaa/bbb.js'));

//根据参数的意思来拼接路径并返回
console.log(path.join('abc/cba', 'kkk/pppp', '../lll'));

//规范参数路径并返回
console.log(path.normalize('abc/cba/../'));

//匹配后得出相对路径
console.log(path.relative('abc/cba/123/456', 'abc/cba/789/1923'));

//匹配后得出绝对路径并返回
console.log(path.resolve('/foo', '/bar', 'aaa/baz'));


console.log('================url====================');
//URL模块
const url = require('url');
const myurl = new url.URL('https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=webpack%E6%89%93%E5%8C%85%E5%91%BD%E4%BB%A4%E6%98%AF%E4%BB%80%E4%B9%88&fenlei=256&rsv_pq=a5e2e6b900067729&rsv_t=cd02yqLBez823UaSMTmb8CcLzeoEPXVLWM03gzjOOfRJPNDDD%2FHedqSCZbA&rqlang=cn&rsv_enter=1&rsv_dl=ih_8&rsv_sug3=1&rsv_sug1=1&rsv_sug7=001&rsv_sug2=1&rsv_btype=i&rsp=8&rsv_sug9=es_2_1&rsv_sug4=4993&rsv_sug=9');
/* console.log(myurl); */
const xinxi = new url.URLSearchParams(myurl.search)
console.log(xinxi);
console.log(xinxi.get('ie'));
/* const mymi = {
    href: 'http://nodejs.cn/api/url.html',
    origin: 'http://nodejs.cn',
    protocol: 'http:',
    host: 'nodejs.cn',
    hostname: 'nodejs.cn',
    port: '',
    pathname: '/api/url.html',
}
console.log(url.format(mymi)); */

//console.log(url.parse('https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=webpack%E6%89%93%E5%8C%85%E5%91%BD%E4%BB%A4%E6%98%AF%E4%BB%80%E4%B9%88&fenlei=256&rsv_pq=a5e2e6b900067729&rsv_t=cd02yqLBez823UaSMTmb8CcLzeoEPXVLWM03gzjOOfRJPNDDD%2FHedqSCZbA&rqlang=cn&rsv_enter=1&rsv_dl=ih_8&rsv_sug3=1&rsv_sug1=1&rsv_sug7=001&rsv_sug2=1&rsv_btype=i&rsp=8&rsv_sug9=es_2_1&rsv_sug4=4993&rsv_sug=9'));
