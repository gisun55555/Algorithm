function solution(n, results) {
    // 2차원 배열만들기
    // 빵구 칠하기
    // 플루이드 마셜 진행시키기
    // 정확하게 순위 매길수 있는 친구들 구하기
    let answer=[]
    
    
    const arr = Array.from({length:n+1},()=>new Array(n+1).fill(false))
    console.log(arr)
    
    results.forEach(([win,lose])=>arr[win][lose]= true)
    console.log(arr)
    
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                if(arr[i][k]===true&&arr[k][j]===true){
                    arr[i][j]=true
                }
                
            }
        }
    }
    
    console.log(arr)
    
    for(let k=1;k<=n;k++){
        let cnt=0
        for(let i=1;i<=n;i++){
                if(arr[k][i]===true || arr[i][k]===true){
                    cnt+=1
                    if(cnt===n-1){
                        answer.push(k)
                    }
                    
            }
        }
    }
    console.log(answer)
    
    
    
    
    
    
    
    
    //arr[i][k]&&arr[k][j] 이거어색한지 파악
    
    
    
    
    return answer.length
}