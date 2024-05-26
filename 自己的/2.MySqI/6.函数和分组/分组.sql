-- 查询员工分布的居住地,以及每个居住地有多少名员工
-- 如: 天符三街 3
select location,count(id) as '员工数量' from `naisi`.employee group by location;


-- 查询所有薪水在10000以上的员工的分布的居住地,然后仅得到聚集地大于30的结果
  SELECT
	location,
	count( id ) 
FROM
	`naisi`.employee 
WHERE
	salary > 10000 
GROUP BY
	location 
HAVING
	count( id )> 30;