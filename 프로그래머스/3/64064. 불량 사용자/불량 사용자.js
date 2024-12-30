function solution(user_id, banned_id) {
    function isMatch(user,banned){
        const regex = new RegExp(`^${banned.replace(/\*/g, '.')}$`)
        return regex.test(user)
    }
    
    const possibleMatches = banned_id.map(banned =>
        user_id.filter(user => isMatch(user,banned))
        )
    const resultSet = new Set()
    
    
    function backtrack(index,path){
        if(index===possibleMatches.length){
            const sortedPath = [...path].sort()
            resultSet.add(sortedPath.join(','))
            return
        }
        
        for (const user of possibleMatches[index]){
            if(!path.has(user)){
                path.add(user)
                backtrack(index+1,path)
                path.delete(user)
                
            }
        }
        
        
    }
    backtrack(0,new Set())
    return resultSet.size

}

