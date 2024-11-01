
SELECT warehouse_id,warehouse_name,address,
    CASE 
        WHEN freezer_yn IS NULL THEN 'N'
        ELSE freezer_yn
    END AS freezer_yn
        

FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '%경기도%'