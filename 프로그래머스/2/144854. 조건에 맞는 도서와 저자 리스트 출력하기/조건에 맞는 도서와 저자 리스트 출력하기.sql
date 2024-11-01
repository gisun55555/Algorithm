SELECT B.book_id, A.author_name,DATE_FORMAT(published_date,'%Y-%m-%d') as PUBLISHED_DATE
FROM BOOK B
JOIN AUTHOR A ON B.AUTHOR_ID = A.AUTHOR_ID
WHERE B.CATEGORY ='경제'
order by 3