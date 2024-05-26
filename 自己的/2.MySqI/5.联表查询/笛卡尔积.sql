-- 笛卡尔积 查询
  select * from `naisi`.`user`,`naisi`.company;

-- 练习 创建一张表,记录足球对
-- 查询出对阵表
select t1.`name` as '主场', t2.`name` as '客场' from test as t1, test as t2 where t1.id != t2.id;

