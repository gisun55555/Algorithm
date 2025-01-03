function solution(k, tangerine) {
    const countMap = new Map();

    tangerine.forEach(size => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    });

    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

    let kinds = 0; 
    let total = 0; 

    for (const count of sortedCounts) {
        total += count;
        kinds++;
        if (total >= k) break;
    }

    return kinds;
}