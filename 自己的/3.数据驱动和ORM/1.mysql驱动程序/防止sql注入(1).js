//导入 promise形式的 mysql2库
const mysql = require('mysql2/promise');


async function misi(id) {
    //创建数据库连接
    const connection = await mysql.createConnection({
        host: 'localhost', //域名
        user: 'root', //账号
        password: '123456123456', //密码
        database: 'naisi', //数据库
        multipleStatements: true, //允许运行多条sql语句 
    });

    //解构数组              //使用 execute函数,防止sql注入,将变量特殊处理
    const [results] = await connection.execute(`select * from \`naisi\`.\`company\` where id=?`, [id]);

    console.log(results);

    //断开链接
    connection.end();
}

misi(`'';insert into \`naisi\`.\`company\`(\`name\`,location,buildDate) values(\'米西米西\',\'北京\',CURDATE())`)