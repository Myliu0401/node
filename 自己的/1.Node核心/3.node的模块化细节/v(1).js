console.log('当前文件的目录:', __dirname);
console.log('当前文件的路径:', __filename);
exports.m = 678;
this.m = 5;
module.exports = {
    a: 123,
    b: 456
};

console.log(this)