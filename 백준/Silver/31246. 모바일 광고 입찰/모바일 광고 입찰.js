const fs = require("fs");
const data = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx =0
const N = data[idx++], K = data[idx++]

let win0 =0
let pos = []

for(let i=0;i<N;i++){
    const A = data[idx++], B=data[idx++]
    const d= B-A
    if (d<=0) win0++
    else pos.push(d)
}

if(win0>=K){
    console.log(0)
} else {
    const need = K -win0
    pos.sort((a,b)=> a-b)
    console.log(pos[need-1])
    
}