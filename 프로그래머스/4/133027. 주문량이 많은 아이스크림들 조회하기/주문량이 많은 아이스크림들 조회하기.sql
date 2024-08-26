WITH TOTAL_ORDERS AS (
    SELECT 
        FLAVOR,
        SUM(TOTAL_ORDER) AS TOTAL_SUM
    FROM (
        SELECT 
            FLAVOR, 
            TOTAL_ORDER 
        FROM 
            FIRST_HALF
        UNION ALL
        SELECT 
            FLAVOR, 
            TOTAL_ORDER 
        FROM 
            JULY
    ) AS ALL_ORDERS
    GROUP BY 
        FLAVOR
)
SELECT 
    FLAVOR
FROM 
    TOTAL_ORDERS
ORDER BY 
    TOTAL_SUM DESC
LIMIT 3;
