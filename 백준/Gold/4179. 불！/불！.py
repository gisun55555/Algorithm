from collections import deque
q = deque()
n,m = map(int,input().split())

arr= [ list(input()) for i in range(n)]
dxl=[0,0,1,-1]
dyl=[1,-1,0,0]
# print(arr)

# j 부터 찾아서 q에 넣기
q = deque()



for i in range(n):
    for j in range(m):
        if arr[i][j] == 'F':
            arr[i][j] = 0
            q.append([i,j,0])

for i in range(n):
    for j in range(m):
        if arr[i][j] == 'J':
            if i==0 and -1<j<m:
                print(1)
                exit(0)
            if i==n-1 and -1<j<m:
                print(1)
                exit(0)
            if -1<i<n and j==0:
                print(1)
                exit(0)
            if -1<i<n and j==m-1:
                print(1)
                exit(0)              
            q.append([i,j,1])


while q:
    y,x,c = q.popleft()

    for i in range(4):
        dy = y + dyl[i]
        dx = x + dxl[i]
        if -1<dy<n and -1<dx<m:
            if c == 0: # 불일경우 0 을 그리며 진출
                if arr[dy][dx] == 0: continue # 아닌 부분 continue 로해서 제작하자
                if arr[dy][dx] != '#':
                    arr[dy][dx] = 0
                    q.append([dy,dx,0])
            if c != 0: # 지훈이 경우 앞으로 나아가기
                if arr[dy][dx] == 0: continue
                if arr[dy][dx] == '#': continue
                if arr[dy][dx] == '.':
                    if dy==0 and -1<dx<m:
                        print(c+1)
                        exit(0)
                    if dy==n-1 and -1<dx<m:
                        print(c+1)
                        exit(0)
                    if -1<dy<n and dx==0:
                        print(c+1)
                        exit(0)
                    if -1<dy<n and dx==m-1:
                        print(c+1)
                        exit(0)                    
                    else:
                        arr[dy][dx] = c
                        q.append([dy,dx,c+1])
print('IMPOSSIBLE')

