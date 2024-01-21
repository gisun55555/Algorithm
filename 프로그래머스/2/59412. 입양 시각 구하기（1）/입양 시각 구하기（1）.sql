SELECT to_number(to_char(datetime, 'hh24')) as hour, count(to_char(datetime, 'hh24')) as count
from animal_outs
where to_char(datetime, 'hh24') between 9 and 19
group by to_char(datetime, 'hh24')
order by hour