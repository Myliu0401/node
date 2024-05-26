/* const a = Buffer.from('fashuejkbjkash', 'base64');
const b = Buffer.from('afsafadas','utf-8');
console.log(Buffer.concat([a,b])) */

const fs = require('fs');
fs.promises.readFile('../hsq.jpg','base64').then((chunk)=>{
    console.log(chunk)
})