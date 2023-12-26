from collections import deque
dyl =[0,0,-1,1]
dxl =[-1,1,0,0]

t = int(input())
for tc in range(t):
    q = deque()
    m, n = map(int,input().split()) # m열n행
    arr =  [list(input()) for i in range(n)]
    # print(arr)
    for i in range(n): # 불 시작점 찾기
        for j in range(m):
            if arr[i][j] == '*':
                q.append([i,j,0])
                arr[i][j]=0
    flag=0
    for i in range(n):
        if flag ==1:
            break
        for j in range(m):
            if arr[i][j] == '@':
                q.append([i,j,1])
                if i == 0 or i == n-1 or j == 0 or j == m-1:
                    print(1)
                    flag=1
                    break


 
    if flag ==1: continue
    rs = 0
    while q:
        y,x,c = q.popleft()
        for i in range(4):
            if flag ==1:
                break
            dx = x + dxl[i]
            dy = y + dyl[i]
            if -1<dy<n and -1<dx<m:
                if c == 0:
                    if arr[dy][dx] == '#':continue
                    if arr[dy][dx] == 0: continue
                    arr[dy][dx] = 0
                    q.append([dy,dx,0])
                if c != 0:
                    if arr[dy][dx] =='.':
                        if dy == 0 or dy == n-1 or dx == 0 or dx == m-1:
                            rs = c
                            flag = 1
                            break


                    if arr[dy][dx] == '#':continue
                    if arr[dy][dx] == 0: continue
                    if arr[dy][dx] =='.':
                        arr[dy][dx] = c
                        q.append([dy,dx,c+1])
                    
    if flag == 1:
        print(rs+1)
    else:
        print('IMPOSSIBLE')