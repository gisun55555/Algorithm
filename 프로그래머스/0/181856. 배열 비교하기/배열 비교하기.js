function solution(arr1, arr2) {
    
    
    
    
    var answer = 0;
    
    if(arr1.length>arr2.length){
        answer=1
    } else if (arr1.length<arr2.length){
        answer=-1
    } else{
        let sum1 = arr1.reduce((sum,x)=>sum+x)
        let sum2 = arr2.reduce((sum,x)=>sum+x)
        
        if (sum1>sum2){
            answer=1
        } else if (sum2>sum1){
            answer=-1
        } else{
            answer=0
        }
    }
    
    
    
    
    return answer;
}