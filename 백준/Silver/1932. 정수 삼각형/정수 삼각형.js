const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input.shift())
// console.log(input)
// 이부분 피드백
const lst = input.map(n=>n.split(' ').map(n=> Number(n)))
// console.log(lst)

// console.log(n)
for(let i=n-2;i>=0; i--){
    // console.log(i)
    for(let j=0;j<=i; j++){
    // console.log('a',j)
    lst[i][j]=lst[i][j]+Math.max(lst[i+1][j],lst[i+1][j+1])
    }
}

console.log(lst[0][0])