

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// console.log(input)




dyl=[-1,-1,-1,0,0,1,1,1]
dxl=[1,0,-1,1,-1,1,0,-1]

function bfs(y,x,arr,w,h){
    

    const que =[]
    que.push([y,x])

    while(que.length){
        let [dy,dx]=que.shift()

        for(let i=0;i<8;i++){
            ry=dyl[i]+dy
            rx=dxl[i]+dx

            if(ry<0||ry>=h||rx<0||rx>=w){
                continue
            }

            if(arr[ry][rx]===1){
                arr[ry][rx]=0
                que.push([ry,rx])
            }
        }
    }
    
    
}

while (1){

    const [w,h] = input.shift().split(' ').map(Number)
    if (w===0 && h===0){
        break
    }
    // console.log(w,h)

    const arr =[]
    for(let i=0;i<h;i++){
        arr.push(input.shift().split(' ').map(Number))

    }
    let cnt=0

    for(let i=0;i<h;i++){
        for(let j=0 ;j<w;j++){
            if(arr[i][j]===1){
                cnt+=1
                bfs(i,j,arr,w,h)
            }

        }
    }

    console.log(cnt)


}