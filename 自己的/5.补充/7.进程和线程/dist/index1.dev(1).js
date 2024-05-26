"use strict";

/**
 * 判断一个数是不是质数   除1和自身外不能被整除的数
 * @param {*} n 
 */
function Primenumber(n) {
  if (n === 1) {
    return false;
  }

  ;

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

;
module.exports = Primenumber;