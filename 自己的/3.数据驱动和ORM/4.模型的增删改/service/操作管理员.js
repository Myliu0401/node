//ORM层向服务器提供接口,服务层进行逻辑验证等等后,来调用ORM层接口。


//导入管理员模型,也就是管理员的表
const Guanli = require('../models/管理员.js');


//导出管理员实例
exports.Admin = async function (shiliobj, Gid) {

    //得判断数据库中有没有管理员,如果没有会自动添加一个
    //逻辑

    //判断shiliobj里各种属性是否合理,及账号是都已存在等等
    //逻辑

    //上面的逻辑判断后,最终确定无误后,添加一个管理员
    const naimi = await Guanli.create(shiliobj);

    //只得到添加的信息
    return naimi.toJSON();
};

//删除一个管理员
exports.Deteledmin = async function (Gid) {

    //判断是否为管理员,是否只剩下最后一个管理员等等
    //逻辑

    //最终删除管理员
    //方式一: 得到实例 
    try {
        var isnt = await Guanli.findByPk(Gid);
    } catch (err) {
        isnt = false;
    }
    if (isnt) {
        //删除实例
        isnt.destroy();
    } else {
        throw '报错'
    };


    //方式二: 
    //   Guanli.destroy({ //异步
    //       where: {
    //           id: Gid
    //       }
    //   });


};

//修改一个管理员
exports.Anderndmin = async function (shiliobj, Gid) {

    //判断是否为管理员,是否修改的信息的完整性
    //逻辑

    //方式一: 得到实例
    //   const inis = Guanli.findByPk(Gid);
    //修改
    //   inis = shiliobj.xx
    //刷新
    //   inis.reload();

    //方式二: 
    const naimi = await Guanli.update(shiliobj, {
        where: {
            id: Gid
        }
    });
    return naimi;
}