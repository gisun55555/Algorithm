from collections import deque
def solution(n, computers):
    
    visited = [0] * n
    print(visited)
    
    def bfs(current):
        q=deque([current])
        
        while q:
            x= q.popleft()
            visited[x]=1
            for i in range(n):
                if computers[x][i]==1:
                    if visited[i]==0:
                        q.append(i)
    answer=0
    for i in range(n):
        if visited[i]==0:
            answer +=1
            bfs(i)
        
        
    
    return answer