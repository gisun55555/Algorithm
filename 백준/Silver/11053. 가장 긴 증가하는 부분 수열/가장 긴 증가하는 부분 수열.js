const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input.shift()
// console.log(n)

//문자열을 배열로 바꾸는 split(구분자를 통해 구분해 배열 생성)
const lst = input[0].split(' ').map(e => Number(e))
// console.log(lst)


// dp 배열 생성
const dpArray = new Array

for(let i=0;i<n;i++){
    const value = [1]
    // console.log(i)

    for(let j=0;j<i;j++){
        if(lst[i]>lst[j]){
            value.push(dpArray[j]+1)
        }
    }
    dpArray[i] = Math.max(...value)
}

console.log(Math.max(...dpArray))