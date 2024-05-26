const util = require('util');

async function delay(miao) {
    return new Promise((reolve, reject) => {
        setTimeout(() => {
            reolve(miao);
        }, miao)
    })
};

const func = util.callbackify(delay);
const mifunc = func(500, (err, value) => {
    console.log(err, value,mifunc)
});

console.log(mifunc,123)