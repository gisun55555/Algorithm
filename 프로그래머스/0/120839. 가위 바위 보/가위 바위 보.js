function solution(rsp) {
    
    const winMap ={'2':'0','0':'5','5':'2'}
    
    let answer=[...rsp].map( choice=>winMap[choice] )

    return answer.join('')
        
        
}