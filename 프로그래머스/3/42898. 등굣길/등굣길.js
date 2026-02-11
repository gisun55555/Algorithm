function solution(m, n, puddles) {
    const Mod = 1000000007
    
    const dp = Array.from({length:n+1},()=> Array(m+1).fill(0))
    dp[1][1] = 1;
    
     const puddlesArray = Array.from({length:n+1},()=> Array(m+1).fill(0))
     // console.log(dp)
     
     for(i=0;i<puddles.length;i++){
         puddlesArray[puddles[i][1]][puddles[i][0]]=1
         
     }
    
    for(let i=1;i<=m;i++){
        
        for(let j=1;j<=n;j++){
            if(puddlesArray[j][i]===1) continue
            dp[j][i] += dp[j-1][i]+dp[j][i-1]
            dp[j][i] %= Mod
            
            
            
            
        }
        
    }
    
    
    
    
    
    
    var answer = dp[n][m]
    return answer;
}