//导入 mysql驱动程序包
const mysql = require('mysql2');
console.log(typeof (mysql));


//创建一个数据库连接
const connection = mysql.createConnection({
    host: 'localhost', //localhost代表本地主机
    user: 'root', //账号
    password: '123456123456', //密码
    database: 'naisi' //数据库
});


//向数据库发送sql语句
//查询语句
/* connection.query('select * from `company`', (err, results) => {   
    console.log(results);
}); */

//增加记录语句
/* connection.query('insert into `naisi`.`company`(`name`,location,buildDate) values(\'abc\',\'北京\',CURDATE())',
    (err, results) => {
        console.log(results);
        console.log(err)
    }); */


//修改语句
/* connection.query('update `naisi`.`company` set `name`=\'百度\' where `name`=\'abc\'', (err, results) => {
    console.log(results);
}); */


//删除语句
connection.query('delete from `naisi`.`company` where `name`=\'百度\'', (err, results) => {
    console.log(results);
});