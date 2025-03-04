function solution(n, results) {
    
    
    const graph = Array.from({length:n+1},()=>Array(n+1).fill(false))
    
    
    results.forEach(([winner,loser])=>{
        graph[winner][loser] = true
        
    })
    
    
    // 플로이드 워셜 중간 경로 있다면 연결
    for(let k=1; k<=n;k++){
        for(let i=1; i<=n; i++){
            for(let j=1; j<=n;j++){
                if(graph[i][k]&&graph[k][j])
                graph[i][j] = true
            }
        }
    }
    
    
    let count =0
    for(let i=1;i<=n;i++){
        let knownMatches =0
        for(let j=1;j<=n;j++){
            if(graph[i][j]||graph[j][i]){
                knownMatches+=1
            }
            
        }
        if(knownMatches == n-1) count++
        
    }
    
    
    
    return count;
}