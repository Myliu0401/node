//创建websocket
const socket = io.connect(); //可以传参数为url地址,没传表示使用页面的url


/**
 * 用于登录
 * @param {*} value  登录的用户名
 */
page.onLogin = function (value) {
    //发送登录信息
    socket.emit('login', value);

    //监听登录的响应
    socket.on('login', (chunk) => {
        console.log(chunk)
        if (chunk) {
            //获取所有在线人数
            socket.emit('users', '');

            //进入页面
            page.intoChatRoom();
            return;
        }
        window.alert('登录失败,名字已存在');
    });
};

//监听所有在线用户
socket.on('users', (data) => {
    yonhu(data)
});


//监听服务器的广播 --- 进行聊天时,除自己外,其他socket会被广播到
socket.on('userin', (data) => {
    console.log(data)
    page.addUser(data);
});


//监听服务器的广播 --- 有人退出了聊天室
socket.on('userout', (data) => {
    //谁退出了聊天室
    page.removeUser(data);
});


/**
 * 所有在线人数
 * @param {*} arr  用户数组 
 */
function yonhu(arr) {
    //清空页面的用户
    page.initChatRoom();
    for (let key in arr) {
        //新用户进行
        page.addUser(arr[key]);
    }
};

/**
 * 发送消息
 * @param {*} value    当前用户名
 * @param {*} data     发送的数据
 * @param {*} value2   目标用户名 null表示全部
 */
page.onSendMsg = function (value, data, value2) {
    console.log(value, data, value2)
    //发送消息
    socket.emit('msg', {
        to: value2,
        content: data
    });
    //在自己页面显示发送的消息
    page.addMsg(value, data, value2);

    //清空自己输入框的内容
    page.clearInput();
};


function xiaoxi() {
    //接收消息
    socket.on('new msg', (data) => {
        console.log(data)
        //在别人页面显示发送的消息
        page.addMsg(data.from, data.content, data.to);
    });
};
xiaoxi();