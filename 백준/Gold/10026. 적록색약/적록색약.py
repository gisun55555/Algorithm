import copy
from collections import deque
dyl = [0,0,1,-1]
dxl = [1,-1,0,0]

def bfs(y,x,c,d):
    q = deque()
    q.append([y,x])
    ctarget = c
    arr[y][x] =0
    while q:
        y,x = q.popleft()

        for i in range(4):
            dy = y + dyl[i]
            dx = x + dxl[i]
            if -1<dy<N and -1<dx<N:
                if d[dy][dx] == ctarget:
                    d[dy][dx] = 0
                    q.append([dy,dx])


N = int(input())



arr = [ list(input()) for i in range(N)]

arr2 = copy.deepcopy(arr)

ct1=0
for i in range(N):
    for j in range(N):
        if arr[i][j] == 'R' or arr[i][j] == 'B' or arr[i][j] == 'G':
            bfs(i,j,arr[i][j],arr)
            ct1 +=1

for i in range(N):
    for j in range(N):
        if arr2[i][j] == 'G':
            arr2[i][j] = 'R'
# print(arr2)

ct2=0
for i in range(N):
    for j in range(N):
        if arr2[i][j] == 'R' or arr2[i][j] == 'B' or arr2[i][j] == 'G':
            bfs(i,j,arr2[i][j],arr2)
            ct2 +=1
# print(arr2)
print(ct1,ct2)