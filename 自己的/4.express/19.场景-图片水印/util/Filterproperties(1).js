const validate = require("validate.js");

exports.XFilter = function (valueobj,...obj){

  //  console.log(obj,'=========11111111')
     const miobj = {};
     for(let key in valueobj){
        if(obj.includes(key)){
            miobj[key] = valueobj[key]
        }
     }
     return miobj;
}