function solution(N) {
    return String(N)  
        .split('')    
        .map(Number) 
        .reduce((acc, cur) => acc + cur, 0); 
}

