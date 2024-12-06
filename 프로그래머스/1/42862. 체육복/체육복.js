function solution(n, lost, reserve) {
    
    var answer = n;
    var lst=[]
    
    for(i=0; i<n+2;i++){
        lst.push(1)
    }
    console.log(lst)
    for(i of reserve){
        lst[i]=2
    }
    console.log(lst)
    
    for(i of lost){
        lst[i]-=1
    }
    console.log(lst)

    for(i=1; i<n+1;i++){
        if(lst[i]===0){
            
            
            if(lst[i-1]===2){
                lst[i-1]-=1
                lst[i]=1
            } else if(lst[i+1]===2){
                lst[i+1]-=1
                lst[i]=1
                
            }
            
        }
    }
    
    
    for(i=1;i<n+1;i++){
        if(lst[i]==0){
            answer-=1
        }
    }
    
    
    
    return answer;
}