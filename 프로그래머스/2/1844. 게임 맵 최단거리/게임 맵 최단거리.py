from collections import deque

def solution(maps):
    
    answer = 0

    
    q=deque()
    q.append([0,0])
    
    while q:
        now=q.popleft()
        y,x = now
        dxl = [1,-1,0,0]
        dyl = [0,0,-1,1]
        
        for i in range(4):
            dy = dyl[i]+y
            dx = dxl[i]+x
            
            if dy<0 or dx<0 or dy>=len(maps) or dx >=len(maps[0]):
                continue
            if maps[dy][dx]==1:
                maps[dy][dx]=maps[y][x]+1
                q.append([dy,dx])
        
        
    if maps[len(maps)-1][len(maps[0])-1]==1:
        answer=-1
    else:
        answer=maps[len(maps)-1][len(maps[0])-1]
    
    
    
    return answer