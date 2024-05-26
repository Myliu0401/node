const util = require('util');

function mi(miao,callback){
     setTimeout(()=>{
         console.log(callback)
        callback(miao,miao)
     },2000)
}


const pro = util.promisify(mi);

pro(500).then((data)=>{
    console.log(data,123456)
},(err)=>{
    console.log(err,789)
});

