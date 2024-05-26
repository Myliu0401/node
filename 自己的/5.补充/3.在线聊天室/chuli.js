/**
 * 处理websocket请求
 * @param {*} io  进行包装过的服务器 
 */
module.exports = function (io) {
    io.on('connection', (socket) => {
        //获取当前用户名
        let name = ''

        //接收登录的请求信息
        socket.on('login', (chunk) => {
            name = login(socket, chunk);
        });


        //接收请求所有在线用户
        socket.on('users', (chunk) => {
            users(socket, dataArr);
        });


        //监听用户离开 --- 也就是断开链接
        socket.on('disconnect', () => {
            Breaklink(socket, name);
        });


        //接收用户发送的信息
        socket.on('msg', (chunk) => {
            console.log('用户名', name)
            Processingmessages(socket, chunk, name)
        });

    });
};


//用来装用户名,相当于模拟数据库
let dataArr = [];

/**
 * 对登录的信息进行判断并响应给客户端
 * @param {*} socket 对应请求的socket
 * @param {*} name 登录的用户名
 */
function login(socket, name) {
    //当前用户名
    let Name = ''

    //对用户名进行判断
    if (name) {
        const bo = dataArr.filter((el) => {
            return el.name === name;
        }).length;
        if (name.includes('所有人')) { //名字不能为所有人
            socket.emit('login', false);
        } else {
            //用户名是否已存在
            if (!bo) {
                socket.emit('login', true); //发回响应

                //将用户的信息添加到数组中
                dataArr.push({
                    name,
                    socket,
                });

                //存储当前用户名
                Name = name;

                //广播 --- 广播给其他socket
                socket.broadcast.emit('userin', name);

                return Name;
            } else {
                //用户名已存在
                socket.emit('login', false);
            }

        };
        return;
    };
    //名字不能为空
    socket.emit('login', false);
};


/**
 * 获取所有在线用户
 * @param {*} socket 对应请求的socket
 * @param {*} data  装用户的数组
 */
function users(socket, datas) {
    //进行过滤,将socket过滤掉
    const myData = datas.map((el) => {
        return el.name;
    });
    // console.log(myData)

    //给socket发回 所有在人数的响应
    socket.emit('users', myData);

};


/**
 * 处理断开链接
 * @param {*} socket 断开链接的socket 
 * @param {*} name  当前用户名
 */
function Breaklink(socket, name) {
    //删除当前用户
    dataArr = dataArr.filter((el) => {
        return el.name !== name
    });

    // console.log(dataArr)

    //广播给在线用户
    socket.broadcast.emit('userout', name);
};


/**
 * 处理客户端发送的信息
 * @param {*} socket   发送的那个socket
 * @param {*} data     发送的数据
 * @param {*} name     发送的那个socket的用户名
 */
function Processingmessages(socket, data, name) {
    if (data.to === null) {
        //发送给所有人 ---  通过广播发送给其他人
        socket.broadcast.emit('new msg', {
            from: name,
            content: data.content,
            to: data.to
        });
    } else {
        //发送给某个人
        dataArr.filter((el) => {
            return el.name === data.to
        })[0]['socket'].emit('new msg', {
            from: name,
            content: data.content,
            to: data.to
        });
    }
};