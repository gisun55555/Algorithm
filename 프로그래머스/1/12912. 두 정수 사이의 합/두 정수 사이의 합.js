function solution(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    return (max - min + 1) * (min + max) / 2;
}