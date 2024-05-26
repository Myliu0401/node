 select AVG(`naisi`.employee.salary) as '工资平均值' from `naisi`.employee;
 select COUNT(ID) from `naisi`.employee;
 select COUNT(*) from `naisi`.employee;
SELECT
	AVG( salary ) AS '平均工资',
	SUM( salary ) AS '总工资',
	MAX( salary ) AS '最大薪资',
	MIN( salary ) AS '最小薪资',
	COUNT( ID ) AS '总人数' 
FROM
	`naisi`.employee;