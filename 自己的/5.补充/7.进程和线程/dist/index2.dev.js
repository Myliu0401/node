"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var os = require('os');

var _require = require("worker_threads"),
    Worker = _require.Worker; // 创建子线程的父线程


var length = os.cpus().length;
var dataArr = [];

for (var i = 0; i < 10000; i++) {
  dataArr.push(Math.floor(Math.random() * 10000000));
}

;
var Arr = [];
var num = Math.ceil(dataArr.length / length);
var newlength = length;
console.time();

var _loop = function _loop() {
  var newnum = dataArr.slice(l * num, (l + 1) * num);
  var worker = new Worker('./index3.js', {
    workerData: newnum //开启线程时向其传递的数据,

  }); // worker是子线程实例

  worker.on("message", function (msg) {
    // 收到子线程发送的消息时运行的事件
    newlength--;
    Arr.push.apply(Arr, _toConsumableArray(msg));

    if (newlength === 0) {
      console.timeEnd();
      console.log(Arr);
    }

    worker.terminate();
  });
};

for (var l = 0; l < length; l++) {
  _loop();
}