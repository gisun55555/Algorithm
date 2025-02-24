function solution(n, vertex) {
    
    const graph = Array.from({ length:n+1},()=>[])
    
    vertex.forEach(([a,b])=>{
        graph[a].push(b)
        graph[b].push(a)
        
    })
    
    const distances = Array(n+1).fill(-1)
    const queue = [1]
    distances[1]=0
    
    while(queue.length){
        const node = queue.shift()
        
        for(const next of graph[node]){
            if(distances[next] === -1){
                
                distances[next] = distances[node]+1
                queue.push(next)
            }
            
            
        }
        
        
    }
    const maxDistance = Math.max(...distances)
    
    
    
    
    return distances.filter(d => d === maxDistance).length;
}


    