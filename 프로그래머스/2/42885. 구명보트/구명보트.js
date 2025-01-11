// 단순 구현


function solution(people,limit){
    people.sort((a,b)=>a-b)
    let count =0
    
    while(people.length){
        
        if(people[0]+people[people.length-1]<=limit){
            people.shift()
            people.pop()
            
        } else {
            people.pop()
        }
        count ++
    }
    
    return count
    
}