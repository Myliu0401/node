const fs = require('fs');

//可读流
const rs = fs.createReadStream('./temp/1.text');

//可写流
const ws = fs.createWriteStream('./temp/1.text');

const rw = rs.pipe(ws);


/* rw.write('mi') */