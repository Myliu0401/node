const Primenumber = require('./index1.js');
const {
    isMainThread, // 是否是主线程
    parentPort, // 用于与父线程通信的端口
    workerData, // 获取线程启动时传递的数据
    threadId, // 获取线程的唯一编号
} = require("worker_threads");

const Arr = [];

for (var i = 0; i < workerData.length; i++) {
    Primenumber(workerData[i]) && Arr.push(workerData[i]);
}

parentPort.postMessage(Arr); // 向父线程发送消息