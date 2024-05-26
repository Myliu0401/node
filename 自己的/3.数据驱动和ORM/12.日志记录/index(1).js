require('./关联.js');
const xueobj = require('./service/操作学生.js');

xueobj.Themultiple().then((data) => {
    console.log(data); 
});