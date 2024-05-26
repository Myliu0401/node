require('./管理员.js');
require('./班级.js');
require('./学生.js');
require('./书籍.js');

const sequelize = require('./db.js');

sequelize.sync({ alter: true }).then(() => {
    console.log('所有模型同步成功')
})