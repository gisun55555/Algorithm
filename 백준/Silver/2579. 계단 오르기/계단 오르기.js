const fs= require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = parseInt(input[0],10)
const stairs = input.slice(1).map(Number)
// console.log(input)
// console.log(n)
 
function maxScore (n,stairs) {
    if (n === 1) return stairs[0]
    if (n === 2) return stairs[0] + stairs[1]
    
    let dp = new Array(n).fill(0)
    dp[0] = stairs[0]
    dp[1] = stairs[0] + stairs[1]
    dp[2] = Math.max(stairs[1] + stairs[2],stairs[0]+stairs[2])

// , 안쓰고 let 선언, i 조건, i 증가 변화 설정
    for (let i = 3; i<n;i++){
        dp[i] = Math.max(dp[i-2]+stairs[i],stairs[i]+stairs[i-1]+dp[i-3])
    }


    return dp[n-1]
}

console.log(maxScore(n,stairs))