const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input.shift())
// console.log(input)
const lst = input[0].split(' ').map(n=>Number(n))
// console.log(lst)
const dpArrau = new Array(n+1).fill(0)

for(let i=1;i<=n;i++){
    // console.log(i)

    for(let j=1;j<=i;j++){
    // console.log(j)

        dpArrau[i] = Math.max(dpArrau[i],dpArrau[i-j]+lst[j-1])
    }
    
}
// console.log(dpArrau)
console.log(dpArrau[n])