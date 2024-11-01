from collections import deque


n, bridge_len, max_weight = map(int,input().split())
trucks = list(map(int,input().split()))


bridge  = deque([0]*bridge_len)
curreng_weight = 0
time = 0

for t in trucks:
    while 1>0:
        
        curreng_weight -= bridge.popleft()

        if curreng_weight + t <= max_weight:
            bridge.append(t)
            curreng_weight +=t
            time +=1
            break
        else:
            bridge.append(0)
            time +=1

time += bridge_len

print(time)