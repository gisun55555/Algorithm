const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
// console.log(input)
const n = parseInt(input)

const dp = new Array(n+1).fill(0)
// console.log(dp)

dp[1]=0
dp[2]=1
dp[3]=1
// console.log(dp)

for(let i=4;i<=n;i++){
    const array = new Array
    array.push(dp[i-1])
    if(i%2===0){
        array.push(dp[i/2])
    }
    
    if (i%3===0){
        array.push(dp[i/3])
    }
    dp[i] = 1 + Math.min(...array)
}
// console.log(dp)

console.log(dp[n])