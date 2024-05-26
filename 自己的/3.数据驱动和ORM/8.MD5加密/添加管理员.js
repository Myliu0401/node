const Guanli = require('./service/操作管理员.js');


//添加一个管理员
/* Guanli.Admin({
    Gzhanhao: '1114567',
    Gmima: '765554321',
    Gname:'刘'
}).then((data) => {
   console.log(data)
}); */


//修改管理员
/* Guanli.Anderndmin({
    Gzhanhao: '111456',
    Gmima: '2131324'
}, 8).then((data)=>{
  console.log(data)
}) */


//登录---查询
Guanli.Singlequery({
    Gzhanhao: '111456',
    Gmima: '2131324',
}).then((data) => {
    console.log(data)
});