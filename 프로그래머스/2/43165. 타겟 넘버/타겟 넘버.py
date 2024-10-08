def solution(numbers, target):
    
    global count
    count =0
    
    
    
    def dfs(level,n,sum):
        global count
        
        
        if level==len(numbers):
            if sum ==target:
                count+=1
            return
        
        dfs(level+1,n+1,sum+numbers[n])
        dfs(level+1,n+1,sum-numbers[n])
        return
        
            
    dfs(0,0,0)

    return count