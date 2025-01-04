function solution(n) {
    
    if (n==1){
        return 1
    } else if(n==2){
        return 2
    }
    
    let answer = 0;
    let dp = Array(2001).fill(0)
    dp[1]=1
    dp[2]=2
    
    
    for(let i=3; i<=n; i++){
        dp[i]=(dp[i-1]+dp[i-2])%1234567
    }
    
    console.log(dp)
    return dp[n]
    
    
    
    
    
    
}


