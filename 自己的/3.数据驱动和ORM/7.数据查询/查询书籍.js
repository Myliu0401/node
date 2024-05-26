const Shuji = require('./service/Book.js');


//根据书籍id获取书籍
/* Shuji.Idbook(12).then((data) => {
    console.log(data)
}); */



//根据分页等条件来查书籍
Shuji.Paginationbooks(1, 10,'人','日').then((data) => {
    console.log(data)
});