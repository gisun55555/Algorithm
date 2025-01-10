function solution(people, limit) {
    
    people.sort((a,b)=> a-b)
    let count=0
    let i=0
    let k=people.length-1
    let answer=people.length
    while(i<k){
        if(people[i]+people[k]<=limit){
            count+=1
            i+=1
            k+=-1
            continue
        }
        
        k+=-1
        
    }
    
    return answer-count;
}


