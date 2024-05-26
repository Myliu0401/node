const { setImmediate } = require("timers");

setImmediate(()=>{
    console.log('setImmediate')
});


setTimeout(()=>{
    console.log('setTimeout')
});