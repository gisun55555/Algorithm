from collections import deque

n,m =map(int,input().split())

# 배열 선언
arr = [ list(map(int,input().split()))for i in range(m)]
# print(arr)

dxl=[0,0,-1,1]
dyl=[-1,1,0,0]


q = deque()

# 시작부분 큐에 다 우선 담기 시작점이 여러개라고 생각하였음
for i in range(m):
    for j in range(n):
        if arr[i][j] ==1:
            q.append([i,j])

# print(q)
# bfs 돌리기 
while q:
    y,x = q.popleft()

    for i in range(4):
        dy = y + dyl[i]
        dx = x + dxl[i]
        if -1<dy<m and -1<dx<n:
            # 0인 경우에만 가서 1 기존 보다 1더해주기 나중에 1 빼면된다 생각
            if arr[dy][dx] == 0:
                arr[dy][dx] = arr[y][x]+1
                q.append([dy,dx])

# bfs 다 돌리고 계산해보기 안익은게 있으면 0 출력 1보다 큰 녀석있으면 저장
k=1
for i in range(m):
    for j in range(n):
        if arr[i][j] == 0:
            print(-1)
            exit(0)
        if arr[i][j] >k:
            k = arr[i][j]

# k 가 1보다 큰게 있으면 bfs는 2부터 색칠해서 퍼져나감이 있었다는걸 뜻한다
if k ==1:
    print(0)
else:
    print(k-1)