const os = require('os');
const {
    Worker
} = require("worker_threads"); // 创建子线程的父线程
const length = os.cpus().length;
const dataArr = [];
for (var i = 0; i < 10000; i++) {
    dataArr.push(Math.floor(Math.random() * 10000000));
};

const Arr = [];
const num = Math.ceil(dataArr.length / length);
let newlength = length;
console.time();
for (var l = 0; l < length; l++) {

    const newnum = dataArr.slice((l * num), (l + 1) * num);

    const worker = new Worker('./index3.js', {
        workerData: newnum //开启线程时向其传递的数据,
    }); // worker是子线程实例

    worker.on("message", (msg) => {
        // 收到子线程发送的消息时运行的事件
        newlength--;
        Arr.push(...msg);
        if (newlength === 0) {
            console.timeEnd()
            console.log(Arr)
        }
        worker.terminate();
    });

}