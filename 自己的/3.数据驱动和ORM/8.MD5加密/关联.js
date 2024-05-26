
const xue1 = require('./models/学生.js');
const ban = require('./models/班级.js');

ban.hasMany(xue1);
xue1.belongsTo(ban);