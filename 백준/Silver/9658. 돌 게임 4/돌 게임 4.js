const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const n = parseInt(input)


function winnner(n){
    const dpArray = new Array(n+1).fill(0)
    if(n>=1){
        dpArray[1]=1
    }
    if(n>=2){
        dpArray[2]=0
    }
    if(n>=3){
        dpArray[3]=1
    }

    for (let i=4;i<=n;i++){
        if(
            Math.max(dpArray[i-1],dpArray[i-4],dpArray[i-3])===1){
                dpArray[i]=0
        }else{
            dpArray[i]=1
        }
    }
    // console.log(dpArray)
    return dpArray[n]
}


if (winnner(n)===1){
    console.log('CY')

} else{
    console.log('SK')

}