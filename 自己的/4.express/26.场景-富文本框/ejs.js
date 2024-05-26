const ejs = require('ejs');


//模板
const Template = `随机数是:<%= number%>`;

const myejs = ejs.render(Template, {
    number: Math.random()
});

//console.log(myejs);

const Myejs = ejs.renderFile('./nai.ejs', {
    number: Math.random()
}).then((data) => {
    console.log(data)
});