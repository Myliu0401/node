//导入promise形式的mysql库
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456123456',
    database: 'naisi',
    multipleStatements: true,
});

async function misi(id) {
    const [results] = await pool.execute(`select * from \`naisi\`.\`employee\` where \`name\` like concat('%',?,'%')`, [id]);
    console.log(results);
}
misi('刘');