//同步所有模型
require('./管理员.js');
require('./班级.js');
require('./学生.js');
require('./Book.js');

const sequelize = require('./init.js');

sequelize.sync({
    alter: true
}).then(() => {
    console.log('所有模型同步成功')
})