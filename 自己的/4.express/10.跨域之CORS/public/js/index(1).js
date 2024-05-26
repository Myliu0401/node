console.log('你好百度！！！');


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
fetch("http://localhost:8848/api/xuesheng", {
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
    });