setTimeout(() => {
    console.log('========')
}, 2000);


const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('有请求了');
})

server.listen(9527);