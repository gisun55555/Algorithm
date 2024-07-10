const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input.shift())
// console.log(n)

// 재정의한거 새로운 곳에 저장 필요
const numbers = input.map( n => Number(n))
// console.log(numbers)


function triangle(x){
    const dpArray = new Array(x+1).fill(0)
    if(x===1){
        return 1
    } else if (x===2){
        return 1
    } else if (x===3){
        return 1
    } else if (x===4){
        return 2
    } else if (x===5){
        return 2
    }
    dpArray[1] =1
    dpArray[2] =1
    dpArray[3] =1
    dpArray[4] =2
    dpArray[5] =2
    for(let i=6;i<=x;i++){
        dpArray[i] = dpArray[i-1]+dpArray[i-5]
    }
    return dpArray[x]
}

for(let i=0;i<n;i++){
    console.log(triangle(numbers[i]))
}
    

//
// 받고
// 쉬프트하고

// 남은 내용 그냥 배열 돌려서
// for n 만큼 돌려버리기
// 함수만들기 배열은 매번 새롭게해서
