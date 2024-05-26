//导入 promise形式的mysql库
const mysql = require('mysql2/promise');

async function misi(id) {
    //创建链接
    const connection = await mysql.createConnection({
        host: 'localhost', //域名
        user: 'root', //账号
        password: '123456123456', //密码
        database: 'naisi', //数据库
        multipleStatements: true, //允许query函数 运行多条sql语句
    });
 
    /* console.log(`select * from \`naisi\`.\`company\` where id=${id}`) */

    //结构数组
    const [results] = await connection.query(`select * from \`naisi\`.\`company\` where id=${id}`);

    console.log(results);

    connection.end();
};

//模拟用户填的id
misi(`'';insert into \`naisi\`.\`company\`(\`name\`,location,buildDate) values(\'米西米西\',\'北京\',CURDATE())`);