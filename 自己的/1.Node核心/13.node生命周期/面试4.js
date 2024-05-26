setImmediate(() => {
    console.log(1);             //第六
  });
  
  process.nextTick(() => {
    console.log(2);             //第二
    process.nextTick(() => {
      console.log(6);           //第三
    });
  });
  
  console.log(3);  //第一打印
  
  Promise.resolve().then(() => {
    console.log(4);                      //第四
    process.nextTick(() => {
      console.log(5);                    //第五
    });
  });














