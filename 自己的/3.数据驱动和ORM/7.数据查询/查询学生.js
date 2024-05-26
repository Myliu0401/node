require('./关联.js');


const Xuesheng = require('./models/学生.js');
//导入学生导出的api对象 ----- 相当于从服务层到进来
const Xueobj = require('./service/操作学生.js');


//查询多个
/* Xueobj.Multiple(1, 10, false, '刘').then((data)=>{
    console.log(data)
}); */


//查询多个
/* Xueobj.Themultiple(1, 10, false, '刘').then((data) => {
    console.log(data, data.data[0].Banji)
}); */

Xueobj.Single(12).then((data)=>{
    console.log(data)
})