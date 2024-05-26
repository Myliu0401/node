-- 查询user表,得到账号为admin,密码为123456的账号
-- 登录
SELECT
    *
FROM
    `naisi
`.`user` 
WHERE
	loginid = 'admin' 
	AND loginPwd = 123456;


-- 查询员工表,按照员工的入职时间降序排序,并且使用分页查询
-- 查询第2页,每页10条数据
SELECT
    *
FROM
    `naisi
`.employee 
ORDER BY
	employee.joinDate DESC 
	LIMIT 10,
	10;


-- 查询工资最高的女员工
SELECT
    *
FROM
    `naisi
`.employee 
WHERE
	ismale = 0 
ORDER BY
	salary DESC 
	LIMIT 0,
	1;