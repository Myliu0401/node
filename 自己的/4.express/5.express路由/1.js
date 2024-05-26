const { async } = require("validate.js");

async function mi(){
    throw 123
}
mi();
console.log('==========')