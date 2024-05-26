const qinqiu = [
    'http://127.0.0.1:5500',
    "null"
]

exports.kuayu = function (req, res, next) {
    //简单请求
    if (req.headers['origin'] && qinqiu.includes(req.headers['origin'])) {
        res.header('Access-Control-Allow-Origin', req.headers['origin']);
    }


    //预检请求
    if (req.method === "OPTIONS") {
        res.header(
            `Access-Control-Allow-Methods`,
            req.headers["access-control-request-method"]
        );
        res.header(
            `Access-Control-Allow-Headers`,
            req.headers["access-control-request-headers"]
        );

    };

    res.header("Access-Control-Allow-Credentials", true);

    next();
}