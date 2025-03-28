function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    const result = arr.filter(num => num !== min);
    return result;
}
