SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I
JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID
ORDER BY TIMESTAMPDIFF(SECOND, I.DATETIME, O.DATETIME) DESC
LIMIT 2;
