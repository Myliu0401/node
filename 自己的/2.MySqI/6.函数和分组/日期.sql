select CURDATE();
select CURRENT_DATE();


select CURTIME();
select CURRENT_TIME();

select TIMESTAMPDIFF(HOUR,'2020-10-24 11:11:11','2020-10-25 11:11:11'), TIMESTAMPDIFF(DAY,'2020-10-24 11:11:11','2020-10-25 11:11:11');

select *, TIMESTAMPDIFF(YEAR,birthday,CURDATE()) as '年龄' from `naisi`.employee order by '年龄' asc ;