from collections import deque

start, end = map(int, input().split())

q = deque()
lst = [0] * 100001 

def bfs(start):
    if start == end:
        return 0 

    q.append(start)  
    lst[start] = 1 

    while q:
        now = q.popleft()

        if now * 2 < 100001 and lst[now * 2] == 0: 
            lst[now * 2] = lst[now]  
            q.appendleft(now * 2)  

        for next_pos in [now - 1, now + 1]:
            if 0 <= next_pos < 100001 and lst[next_pos] == 0: 
                lst[next_pos] = lst[now] + 1  
                q.append(next_pos) 

        if lst[end] != 0:
            return lst[end] - 1  

print(bfs(start))
