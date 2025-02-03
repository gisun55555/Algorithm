const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = input.shift()
const distanceList = input[0].split(' ').map(Number)
const cityList= input[1].split(' ').map(Number)
let answer =0

// console.log(input)
// console.log(distanceList)

for(let i=1;i<cityList.length-1;i++){
    if(cityList[i]>cityList[i-1]){
        cityList[i]=cityList[i-1]
    }

}


for(let i=0;i<cityList.length-1;i++){
    answer +=cityList[i]*distanceList[i]
}

console.log(answer)