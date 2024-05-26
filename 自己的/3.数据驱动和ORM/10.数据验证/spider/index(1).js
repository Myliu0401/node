//导入发送请求的库,因为这个库使用e6来导出,现在用commntjs来导入它会放在对象里的default属性
const axios = require('axios').default;

//这个库是用来分析html字符串片段的
const cheerio = require('cheerio');


//抓取豆瓣网页中的数据,进行过滤,只获取html片段的字符串
async function Grab() {
    const data = await axios.get('https://book.douban.com/latest');
    return data.data;
}

//对html片段字符串进行过滤,并从网页中分析出书籍的基本信息,然后得到一个书籍的详情页链接数组
async function Bookdata() {
    const html = await Grab();
    //console.log(html)
    const $ = cheerio.load(html);
    const links = $('#content .grid-12-12 ul li a.cover'); //获取条件下的所有a元素
    const s = links.map((i, ele) => {
        return $(ele).attr('href'); //获取a元素的链接地址
    }).get(); //因为map函数会返回一个对象,对象里有乱七八糟的东西,对象里的get函数是只得到map函数中返回的数据的集合
    return s;
};

//根据书籍详情页的地址，得到该书籍的详细信息
async function Information(herf) {
    const html = await axios.get(herf); //获取详细信息页面的源代码
    const $ = cheerio.load(html.data); //获取jq的$函数,只能选html.data里面的字符串信息

    //获取书籍的书名
    const Mname = name($, '#wrapper h1 span');

    //获取书籍图片
    const Mimg = Imgsrc($, '#content #mainpic a img');

    //获取出版时间
    const Mchuban = Publish($, '#content #info span.pl');

    //获取书籍作者
    const Mzuozi = Author($, '#content #info span.pl');

    return {
        Sname: Mname,
        Simg: Mimg,
        Schubandate: Mchuban,
        Szuozi: Mzuozi
    }

};

//辅助函数----得到书名
function name($, misi) {
    return $(misi).text().trim();
};

//辅助函数----得到图片地址
function Imgsrc($, misi) {
    return $(misi).attr('src').trim();
};

//辅助函数---得到书籍出版的时间
function Publish($, misi) {
    let text;
    $(misi).filter((index, ele) => {
        if ($(ele).text().trim() === '出版年:') {
            text = ele.nextSibling.nodeValue.trim();
        }
    });
    return text;
};

//辅助函数---得到书籍作者
function Author($, misi) {
    let text;
    $(misi).filter((index, ele) => {
        if ($(ele).text().trim() === '作者') {
            text = $(ele).next('a').text()
        }
    });
    return text;
}


//得到最终的数据
async function Data() {
    const s = await Bookdata();
    const datas = s.map((ele, index) => {
        return Information(ele)
    });
    return Promise.all(datas);
};

//导出最终的数据
module.exports = Data();