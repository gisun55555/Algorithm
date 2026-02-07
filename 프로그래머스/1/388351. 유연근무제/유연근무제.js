function solution(schedules, timelogs, startday) {
  function maxtime(x){
      let t = x+10
      if (t%100>=60){
          t+=40
      }
      return t
  }

    
    
  let cnt = 0;
  
for(let i=0; i<schedules.length; i++){
    const maxtimenow = maxtime(schedules[i])
    let flag=0
    
    for(let k=0;k<1; k++){
        if(flag===1) break
        for(let start = startday; start<startday+7;start++){
            const checkday = start%7
            
            const dayIdx = start - startday
            const target = timelogs[i][dayIdx]
            
            if (checkday ===6 || checkday===0) continue;
            
            if(target>maxtimenow){
                flag =1
                break
            }
            
        }
        
    }
    if(flag===0) cnt+=1
}
    
    

 

  return cnt;
}
