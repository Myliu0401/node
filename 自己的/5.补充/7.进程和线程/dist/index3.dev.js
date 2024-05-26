"use strict";

var Primenumber = require('./index1.js');

var _require = require("worker_threads"),
    isMainThread = _require.isMainThread,
    parentPort = _require.parentPort,
    workerData = _require.workerData,
    threadId = _require.threadId;

var Arr = [];

for (var i = 0; i < workerData.length; i++) {
  Primenumber(workerData[i]) && Arr.push(workerData[i]);
}

parentPort.postMessage(Arr); // 向父线程发送消息