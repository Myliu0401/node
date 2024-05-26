--  1.查询渡一每一个部门的员工数量 
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


-- 2.查询每个公司的员工数量
SELECT
	t1.`name`,count(t3.id) as '员工数量'
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
	INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
GROUP BY
	t1.`name`;


-- 查询所有公司5年内入职的居住在万家湾的女员工数量    
SELECT
	p.`name`,
CASE
		
		WHEN k.num IS NULL THEN
		0 ELSE k.num 
	END 
	FROM
		`naisi`.company AS p
		LEFT JOIN (
		SELECT
			t1.id,
			t1.`name`,
			count( t3.id ) AS num 
		FROM
			`naisi`.company AS t1
			INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
			INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
		WHERE
			TIMESTAMPDIFF(
				YEAR,
				t3.joinDate,
			CURDATE()) <= 5 
			AND t3.location = '万家湾' 
			AND t3.ismale = 0 
		GROUP BY
			t1.id,
		t1.`name` 
	) AS k ON p.id = k.id;


-- 查询渡一所有员工分布在那些居住地,每个居住地的数量   
 SELECT
	t3.location,
	count( t3.id ) AS '数量' 
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
	INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
WHERE
t1.`name` LIKE '%渡一教育%'
GROUP BY
	t1.`name`,t3.location;


-- 查询员工人数大于200的公司信息  
SELECT
	*
FROM
	`naisi`.company AS p
	INNER JOIN (
	SELECT
-- 		t1.`name` AS '公司名称',
		t1.id,
		count( t3.id ) AS num 
	FROM
		`naisi`.company AS t1
		INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
		INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
	GROUP BY
		t1.`name` 
	HAVING
	num > 200 
	) AS k ON k.id = p.id;


-- 6.查询渡一公司里比他平均工资高的员工
SELECT
	* 
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
	INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
WHERE
	t1.`name` LIKE '%渡一%' 
	AND t3.salary > (
	SELECT
		AVG( t3.salary ) 
	FROM
		`naisi`.company AS t1
		INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
		INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
	WHERE
	t1.`name` LIKE '%渡一%' 
	);



-- 7.查询渡一所有名字为两个字和三个字的员工对应人数    
SELECT
	CHAR_LENGTH( t3.`name` ) AS 字数,
	COUNT( t3.id ) AS '员工数量' 
FROM
	`naisi`.company AS t1
	INNER JOIN `naisi`.department AS t2 ON t1.id = t2.companyId
	INNER JOIN `naisi`.employee AS t3 ON t2.id = t3.deptId 
WHERE
	t1.`name` LIKE '%渡一%' 
GROUP BY
	CHAR_LENGTH( t3.`name` ) 
HAVING
	字数 IN ( 2, 3 ); 
