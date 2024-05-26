const moment = require('moment');


console.log(moment.utc('2020-09-05 20:20:20', ['YYYY/M/D H:m:s'], true).valueOf())