//导入管理员导出的api对象 ----- 相当于从服务层到进来
const Guanobj = require('./service/操作管理员.js');


//传一个对象作为查询条件
/* Guanobj.Singlequery({
    Gzhanhao:'61577623755',
    Gmima:'ryBDCfES'
}).then((obj)=>{
   console.log(obj); 
}); */


//传一个主键值作为查询条件
Guanobj.Primarykey(2).then((obj) => {
    console.log(obj)
});