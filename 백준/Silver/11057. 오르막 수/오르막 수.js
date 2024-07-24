const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const n = Number(input)
const mod = 10007

const dpArray = [0,1,2,3,4,5,6,7,8,9,10]
dpArray[1] = 1
for(let i=2;i<=n;i++){



    for(let j=2;j<=10;j++){

        dpArray[j] = (dpArray[j-1]+dpArray[j]) % 10007

    }
}

console.log(dpArray[10])