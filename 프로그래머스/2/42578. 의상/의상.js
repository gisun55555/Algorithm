function solution(clothes) {
    const clothesMap = new Map();

    clothes.forEach(([name, type]) => {
        if (clothesMap.has(type)) {
            clothesMap.set(type, clothesMap.get(type) + 1);
        } else {
            clothesMap.set(type, 1);
        }
    });

    let combinations = 1;
    clothesMap.forEach(count => {
        combinations *= (count + 1); 
    });

    return combinations - 1;
}

