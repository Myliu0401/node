console.log('你好百度！！！');
console.log(naisi)

/* fetch('http://localhost:8848/api/xuesheng').then((data) => {
    return data.json()
}).then((data)=>{
    console.log(data)
}); */


//简单请求
/* fetch('http://localhost:8848/api/xuesheng').then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
}); */


//预检请求
/* fetch("http://localhost:8848/api/xuesheng", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            a: 1,
        },
        credentials: "include",
    })
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
    }); */



denglu.onclick = function () {
    fetch('/api/admin/Signin', {
        method: 'POST',
        headers: { //请求头
            "content-type": "application/json",
        },
        body: JSON.stringify({ //请求体
            "Gzhanhao": "1234567",
            "Gmima": "7654321",
        })
    }).then(data => {
        return data.json()
    }).then((data) => {
        console.log(data)
    })
};



xiugai.onclick = function () {
    fetch('http://localhost:8848/api/xuesheng/1', {
        method: 'PUT',
        headers: { //请求头
            "content-type": "application/json",
        },
        body: JSON.stringify({ //请求体
            Xname: '刘北山'
        })
    }).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data)
    })
};


huoqu.onclick = function () {
    fetch('http://localhost:8848/api/xuesheng/7', {
        method: 'GET',
    }).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data)
    })
}