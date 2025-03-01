function solution(n, vertex) {
    
 const array = Array.from({length:n+1},()=>[])
 const distance = Array(n+1).fill(-1)
 console.log(distance)
 
 console.log(array)
 
 for(let i=0;i<vertex.length;i++){
     const [a,b] = vertex[i]
     array[a].push(b)
     array[b].push(a)
     
 }
       
    console.log(array)

    const q=[1]
    distance[1]=0

    while (q.length >0) {
        let node = q.shift()
        
        for(target of array[node]){
            if(distance[target] === -1){
            distance[target]=distance[node]+1
            q.push(target)}
            
            
        }
        
    }
    
    const max = Math.max(...distance)
    console.log(distance)

       
       return distance.filter(num=>num===max).length
}


    // 2차원 배열만들고
 // 집어넣기
 // bfs로 후딱 찾기
 // 노드로 찾고 넣어주기
 // distance에 그전 값 +1