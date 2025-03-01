function solution(my_string, is_suffix) {
    
    const lst =[]
    
    let answer =0
    
    for (let i=0;i<my_string.length;i++){
        
        
        if(my_string.slice(i,my_string.length) === is_suffix){
            answer=1
            break
            
        }
    }
    
    
    

    
    
    return answer
}