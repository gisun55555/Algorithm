const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const n = parseInt(input)


function dp(n){
   const dpArray = new Array(n+1).fill(0)
    if(n>=1) {
        dpArray[1]=BigInt(1)
    }
    if(n>=2){
        dpArray[2]=BigInt(2)
    }
    for (let i=3; i<=n; i++){
        dpArray[i] = (dpArray[i-2]+dpArray[i-1])% BigInt(15746)
    }
    return dpArray[n] 
}

console.log(String(dp(n)))