const log4 = require('log4js');
const path = require('path');

const filename = path.resolve(__dirname, 'logs', 'log', 'logmi.log');

console.log(typeof (log4));

//配置日志
log4.configure({
    appenders: { //配置出口
        sql: {
            type: 'dateFile', //以文件写入为出口,如果有备份的话,备份的文件名有备份的时间
            filename: filename,
            layout: { //对日志格式进行布局
                type: 'pattern', //表示自定义布局
                pattern: '%c [%d{yyyy-MM-dd  hh:mm:ss}]-[%p] %m' //格式
            },
            maxLogSize: 1024 * 1024, //表示文件记录的最大字节,超过这个容量将对记录的文件进行备份
            keepFileExt: true,
            daysToKeep: 1
        },
        default: { //默认
            type: 'stdout' //默认的配置是输出在控制台
        },
        api: {
            type: 'dateFile',
            filename: path.resolve(__dirname, 'logs', 'api', 'api.log'),
            layout: {
                type: 'pattern',
                pattern: '%c [%d{yyyy-MM-dd  hh:mm:ss}]-[%p] %m'
            },
            maxLogSize: 1024 * 1024,
            keepFileExt: true,
            daysToKeep: 1
        }
    },
    categories: { // 配置日志类型
        mysql: {
            appenders: ['sql'], //以sql出口为目标
            level: 'all' //这个 mysql类型的日志级别为all
        },
        default: { //默认类型
            appenders: ['default'],
            level: 'all'
        },
        api: {
            appenders: ['api'],
            level: 'all'
        }
    }
});

//创建日志 --- 日志类型为 mysql
const logger = log4.getLogger('mysql');

const apilogger = log4.getLogger('api');

exports.logger = logger;
exports.apilgger = apilogger;

/* setInterval(() => {
    logger.debug('abcdefg');
}, 100);
 */

//node线程结束事件
process.on('exit', () => {
    log4.shutdown(); //表示程序结束前判断日志是否记录完成,如果为完成,就继续记录
});