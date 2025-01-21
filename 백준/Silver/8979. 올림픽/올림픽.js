const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N,k] = input[0].split(' ').map(Number)

const countries = input.slice(1).map(line=>{
    const [id,gold,silver,bronze] = line.split(' ').map(Number)
    return {id,gold,silver,bronze}
})

countries.sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold; 
    if (b.silver !== a.silver) return b.silver - a.silver; 
    if (b.bronze !== a.bronze) return b.bronze - a.bronze;
    return 0;
});

const ranks = new Array(N+1).fill(0)
let rank =1

for(let i=0; i<countries.length; i++){
    if(i>0 &&
        countries[i].gold === countries[i-1].gold &&
        countries[i].silver === countries[i-1].silver &&
        countries[i].bronze === countries[i-1].bronze){
            ranks[countries[i].id] = ranks[countries[i-1].id]
        } else{
            ranks[countries[i].id] = rank
        }
        rank++
}

console.log(ranks[k])