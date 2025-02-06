const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [M,N] = input
const arr = new Array(M+2)

// console.log(array)


for(let i=0;i<M+2;i++){
    arr[i] = new Array(N+2).fill(1)
}

for(let i=1; i<M+1;i++){
    for(let j=1; j<N+1;j++){
        arr[i][j]=0

    }
}



let start_x=1
let start_y=1
flag=0
answer=0

for(let i=0;i<N*M-1;i++){
    arr[start_y][start_x]=1
    // console.log(arr)
    // console.log(start_y)



    if (flag===0){
        if(arr[start_y][start_x+1]===0){
            start_x+=1
        } else{
            // console(start_y)
            start_y+=1
            flag+=1
            answer+=1
            continue
        }
    }
    if (flag===1){
        if(arr[start_y+1][start_x]===0){
            start_y+=1
        } else{
            start_x-=1
            flag+=1
            answer+=1
            continue

        }
    }
    if (flag===2){
        if(arr[start_y][start_x-1]===0){
            start_x-=1
        } else{
            start_y-=1
            flag+=1
            answer+=1
            continue

        }
    }
    if (flag===3){
        if(arr[start_y-1][start_x]===0){
            start_y-=1
        } else{
            start_x+=1
            flag=0
            answer+=1
            continue

        }
    }

}



// console.log(arr)
console.log(answer)