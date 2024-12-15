function solution(myString) {
    
    
    
    
    
    var answer = '';
    
    
    
    return myString
    .replace(/a/g,'A')
    .replace(/[A-Z]/g, char=>(char === 'A'?'A':char.toLowerCase()))
}