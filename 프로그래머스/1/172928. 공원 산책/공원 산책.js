function solution(park, routes) {
    var answer = [];
    var start =[]
    var pitfall =[]
    const list_height = park.length;
const list_width = park[0].length
//디벨높 3 높이
    
    for (let i=0; i<list_height ; i++){
        
        for(let j=0; j<list_width; j++){
            
            if(park[i][j]==='S'){
                start.push(i)
                start.push(j)
                
            } else if(park[i][j]==='X'){
                pitfall.push([i,j])                
            }
            
        }
    }
    
    
    
    
    for(let i=0; i<routes.length; i++){
        
        // 카운트 선언 부분 디테일
        const [direction,countStr] = routes[i].split(' ')
        const visited =[...start]
        const count =parseInt(countStr)
        
        console.log(direction)
        console.log(count)
        let flag = 0
        
        for(let i=1; i<count+1; i++){
            if(direction==='E'){
                visited[1]+=1
            } else if(direction==='S'){
                visited[0]+=1
            }else if(direction==='N'){
                visited[0]+=-1
            }else if(direction==='W'){
                visited[1]+=-1
            }
            
            
            // 배여 내부 요소 디벨롭
            if (pitfall.some(p => p[0] === visited[0] && p[1] === visited[1])|| visited[0]<0 || visited[0] >=list_height || visited[1]<0 || visited[1] >=list_width){
                
                flag =1
                break
                
            }
            
            
        }
        if(flag ===0){
                start =[...visited]
            }
        
        
        
    }
    
    
    
    console.log(start)
    console.log(pitfall)
    
    
    return start;
}

