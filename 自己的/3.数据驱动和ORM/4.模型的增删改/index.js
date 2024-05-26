
const Guanliobj = require('./service/操作管理员.js');

//添加
/* Guanliobj.Admin({
    // Gid: '1',
    Gname: '小明',
    Gzhanhao: '1234567',
    Gmima: '7654321'
}).then((data) => {
    console.log(data, '添加成功')
});
 */


//删除
Guanliobj.Deteledmin(3).then((data) => {
    console.log(data,'删除成功')
}, (err) => {
    console.log(err,'=========')
});

//修改
/* Guanliobj.Anderndmin({
    Gname: '小李'
}, 3).then((data)=>{
  console.log(data,'修改成功')
}) */