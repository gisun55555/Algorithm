def solution(n, computers):
    
    visited = [0] * n
    print(visited)
    
    def dfs(current):
        visited[current] =1
        
        for i in range(n):
            is_connect=computers[current][i]
            if is_connect ==1:
                if visited[i] ==0:
                    dfs(i)
    answer = 0
    
    for i in range(n):
        if visited[i]==0:
            answer +=1
            dfs(i)
        
        
    
    return answer