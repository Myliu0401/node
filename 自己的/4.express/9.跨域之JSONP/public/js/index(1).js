console.log('你好百度！！！');


/* fetch('http://localhost:8848/api/xuesheng').then((data) => {
    return data.json()
}).then((data)=>{
    console.log(data)
}); */



/**
 * 创建script标签放进页面
 * @param {*} src 
 */
function jsonp(src) {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
        script.remove();
    }
}
jsonp('http://localhost:8848/api/xuesheng');


//服务器设置的那个函数
function Callback(data) {
    console.log(data)
}