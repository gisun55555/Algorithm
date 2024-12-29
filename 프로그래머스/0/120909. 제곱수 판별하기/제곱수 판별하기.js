function solution(n) {
    const sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)) {
        return 1; 
    } else {
        return 2;
    }
}