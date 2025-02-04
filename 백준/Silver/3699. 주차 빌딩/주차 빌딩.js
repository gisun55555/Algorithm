const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const ts = input.shift()


for(let i=0;i<ts;i++){
    let answer =0
    const [h,l] = input.shift().split(' ').map(Number)
    // console.log(h,l)


    for(let j=0;j<h;j++){
        let index_lst = []
        const lst =input.shift().split(' ').map(Number)
        // console.log(lst)


        for(let i=0;i<lst.length;i++){

            //디벨럽2
            if(Math.max(...lst)===-1){
                break
            } else{
                //디벨롭
                // index_lst.push(lst.indexOf(Math.max(lst)))
                // lst[lst.indexOf(Math.max(lst))]=-1
                const maxValue = Math.max(...lst)
                index_lst.push(lst.indexOf(maxValue))
                lst[lst.indexOf(maxValue)] =-1

            }
        }
        //디벨롭 리스트 역순으로 만들기..!
        // index_lst.sort((a,b)=>a-b)
        index_lst.reverse()
        // console.log(lst)
        // console.log(index_lst)
        let start =0

        for(let i=0;i<index_lst.length;i++){
            // console.log('start',start)
            if(Math.abs((index_lst[i]-start))>(l/2)){
                const a=Math.abs(Math.abs(index_lst[i]-start)-l)*5
                answer+=Math.abs(Math.abs(index_lst[i]-start)-l)*5
                // console.log('a',a)
            } else{
                const b =Math.abs(index_lst[i]-start)*5
                answer+=Math.abs(index_lst[i]-start)*5
                // console.log(b)

            }
            start = index_lst[i]
            answer+=2*10*j
        }
    }
    console.log(answer)



}