function solution(x){
    const move =[]
    
    function hanoi(n, start, mid,goal){
        
        if(n===1){
            move.push([start,goal])
            return
        }
        
        hanoi(n-1,start,goal,mid)
        move.push([start,goal])
        hanoi(n-1,mid,start,goal)
        
        
    }
    hanoi(x,1,2,3)
    
    
    return move
    
}