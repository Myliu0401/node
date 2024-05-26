const buffer = Buffer.from("abcdefg啊"/* , "utf-8" */);
 console.log(typeof(buffer),buffer.length );
const fs = require('fs');
const path = require('path');
 const rs = fs.createReadStream(path.resolve(__dirname,'./index.js'));
 const ws = fs.createWriteStream(path.resolve(__dirname,'./index.js'))
 console.log(typeof(rs.end),typeof(ws.end)  )