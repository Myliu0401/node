const sequelize = require('./models/db.js');

//测试是否成功连接数据库
async function cs() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
cs();

const guanli = require('./models/管理员.js');


(async () => {
    await guanli.sync({
        alter: true
    });

    console.log('模型同步完成');
})();