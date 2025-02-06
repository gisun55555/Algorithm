function solution(s) {
    s = s.toLowerCase();
    
    let pCount = (s.match(/p/g) || []).length;
    let yCount = (s.match(/y/g) || []).length;
    
    return pCount === yCount;
}


