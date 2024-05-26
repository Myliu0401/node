//导入 promise形式的mysql驱动程序
const mysql = require('mysql2/promise');

async function misi() {
    const connection = await mysql.createConnection({
        host: 'localhost', //域名
        user: 'root', //账号
        password: '123456123456', //密码
        database: 'naisi',
        multipleStatements:true,
    });

    //将数据结构出来
    const [results] = await connection.query('select * from `naisi`.`company`;');
    console.log(results);

    //断开链接
    connection.end();
};

 misi();


