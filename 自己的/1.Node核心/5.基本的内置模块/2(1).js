const path = require('path');


const lu = path.resolve('/a','/b/c','../f/l.xx');
console.log(lu)

console.log(path.resolve('/foo', '/bar', 'baz'));


const url = require('url');
const newurl = new url.URL('https://fanyi.baidu.com/?aldtype=16047#en/zh/process');
console.log(url.URLSearchParams)
