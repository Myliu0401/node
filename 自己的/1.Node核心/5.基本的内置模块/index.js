//os
const os = require('os');
console.log(os.EOL) //结束的分割符

console.log(os.arch()) //cpu的架构位

console.log(os.cpus(), os.cpus().length) //cpu的信息,和cup的核为

console.log(os.freemem() / 2 ** 30) //返回内存剩余多少

console.log(os.homedir()) //返回用户目录

console.log(os.hostname()) //返回操作系统的主机名

console.log(os.tmpdir()) //返回操作系统的临时目录

//path
const path = require('path');
console.log(path.basename('xxxx\\xxx\\xxx.html')); //返回文件名

console.log(path.basename('abc.js','js')); //返回匹配过后的文件名

console.log(path.sep)//分割符

console.log(path.delimiter)//分割符

console.log(process.env.PATH.split(path.delimiter))

console.log(path.dirname('aa2/aba/aaaxx')) //返回代表文件夹的部分

console.log(path.extname('naisi/misi/mk.js')) //返回后缀名

console.log(path.join('a','b','c','v.js'))//拼接并返回

console.log(path.normalize('as/sa/gg/hk/../'))

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))//用于将绝对路径转换为相对路径
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/test/bbb'))
console.log('==============')
//绝对路径
console.log(path.resolve('/foo', '/bar', 'baz'))
console.log(path.resolve(__dirname,'ap.js'))


//URL
const url = require('url');
const newurl = new url.URL('https://fanyi.baidu.com/?aldtype=16047#en/zh/process')
console.log(newurl)
console.log(newurl.searchParams)

const objurl = {
    href: 'https://fanyi.baidu.com/?aldtype=16047#en/zh/process',
    origin: 'https://fanyi.baidu.com',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'fanyi.baidu.com',
    hostname: 'fanyi.baidu.com',
    port: '',
    pathname: '/',
    search: '?aldtype=16047',
    hash: '#en/zh/process'
  }

  console.log(url.format(objurl))
  