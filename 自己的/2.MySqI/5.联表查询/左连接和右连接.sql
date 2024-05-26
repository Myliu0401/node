-- 左连接
select * from `naisi`.department as t1 left join `naisi`.employee as t2 on t1.companyId = t2.deptId; 

-- 有连接
select * from `naisi`.department as t2 right join `naisi`.employee as t1 on t2.id = t1.deptId;

-- 内连接
select * from `naisi`.department as t2 inner join `naisi`.employee as t1 on t2.id = t1.deptId;


-- 练习
-- 显示出所有员工的姓名、性别(使用男或女)、入职时间、薪水、所属部门(显示部门名称)、所属公司(显示公司名称)
SELECT
	t1.`name` AS '姓名',
CASE
		t1.ismale 
		WHEN 1 THEN
		'男' ELSE '女' 
	END AS '性别',
	t1.joinDate AS '入职时间',
	t1.salary AS '薪水',
	t2.`name` AS '所属部门',
	t3.`name` AS '公司' 
FROM
	`naisi`.employee AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.deptId = t2.id
	INNER JOIN `naisi`.company AS t3 ON t2.companyId = t3.id;


-- 练习 
-- 查询腾讯和蚂蚁金融的所有员工姓名、性别、入职时间、部门名、公司名
SELECT
	t3.`name` AS '姓名',
CASE
		t3.ismale 
		WHEN 1 THEN
		'男' ELSE '女' 
	END AS '性别',
	t3.joinDate AS '入职时间',
	t2.`name` AS '部门',
	t1.`name` AS '公司' 
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyid
	INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptid 
WHERE
	t1.`name` = '腾讯科技' 
	OR t1.`name` = '蚂蚁金融';


-- 练习
-- 查询渡一教学部的所有员工姓名、性别、入职时间、部门名、公司名   
SELECT
	t3.`name` AS '姓名',
CASE
		t3.ismale 
		WHEN 1 THEN
		'男' ELSE '女' 
	END AS '性别',
	t3.joinDate AS '入职时间',
	t2.`name` AS '部门',
	t1.`name` AS '公司' 
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 on t1.id = t2.companyId
	INNER JOIN `naisi`.employee as t3 on t2.id = t3.deptId
WHERE
	t1.`name` = '渡一教育' and t2.`name` = '教学部';


-- 练习
-- 列出所有公司员工居住的地址 (要去掉重复),相当于只查询没有重复的
select distinct employee.location from `naisi`.employee;