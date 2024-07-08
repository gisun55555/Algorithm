const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// console.log(input)
// console.log(n)
// dpArray

const len = parseInt(input.shift(),10)
const testCases = input.map(Number)
const max = Math.max(...testCases)

const dpArray = new Array(max+1).fill(0)
dpArray[0] = [1,0]
dpArray[1] = [0,1]
// 여기서 dpArray(n-1) 없으면 for 돌리고 있으면 그냥 답 뱉어보자 더 최적화 가능이야 


for (let i=2; i<=max; i++){
    dpArray[i] = [dpArray[i-1][0]+dpArray[i-2][0],dpArray[i-1][1]+dpArray[i-2][1]] 
}

// console.log(dpArray)
const results = testCases.map( n => dpArray[n].join(" ")).join("\n")
console.log(results)