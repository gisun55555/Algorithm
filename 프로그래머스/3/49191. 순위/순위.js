function solution(n, results) {
    
    
    //2차원 배열그리자..!
    const arr = Array.from({length:n+1},()=>Array.from(n+1).fill(false))
    
    results.forEach(([winner,loser])=>{
        arr[winner][loser]=true
    })
    
    
    //플로이드 로샬쓰고
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1; j<=n;j++){
                if(arr[i][k]&&arr[k][j]){
                    arr[i][j]=true
                }
            }
        }
    }
    
    
    //나빼고 모든 로드알면 이긴거구나..!
    
    let answer=0
    for(let i=1;i<=n;i++){
        let cnt=0
        for(let j=1;j<=n;j++){
            if(arr[i][j]||arr[j][i]){
                cnt+=1
            }
            
        }
        if (cnt===n-1){
            answer+=1
        }
    }
    
    
    
    return answer;
}