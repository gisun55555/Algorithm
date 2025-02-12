function solution(intStrs, k, s, l) {
    var answer = [];
    
    
    for(let i=0;i<intStrs.length;i++){
        let a=Number(intStrs[i].slice(s,s+l))
        // console.log(Number(intStrs[i].slice(s,s+l)))
        if(a>k){
            answer.push(a)
        }
        console.log(a)
    }
    return answer;
}