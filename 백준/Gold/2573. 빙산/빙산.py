from collections import deque
import copy

def melt(y,x): #빙산녹는다
    ct=0 #차감할 함수
    for i in range(4):
        dy = y + dyl[i]
        dx = x + dxl[i]
        if arr3[dy][dx] == 0:
            ct +=1
    
    if arr[y][x] - ct < 0:
        arr[y][x] =0
        return
    else:
        arr[y][x] = arr[y][x] - ct

def bfs(y,x):
    q = deque()
    q.append([y,x])
    arr2[y][x] = 0
    while q:
        y,x = q.popleft()

        for i in range(4):
            dy = y + dyl[i]
            dx = x + dxl[i]
            if -1<dy<N and -1<dx<M:
                if arr2[dy][dx] != 0:
                    arr2[dy][dx] = 0
                    q.append([dy,dx])
    


dxl=[0,0,-1,1]
dyl=[1,-1,0,0]
N,M = map(int,input().split()) # 행 열

arr= [ list(map(int,input().split())) for i in range(N)]

# print(arr)

rs=0

flag=0

while flag ==0:
    rs+=1 #결과값 출력
    flag =1
    arr3 = copy.deepcopy(arr) # 빙하 녹이는 비교용!
    for i in range(N):
        for j in range(M):
            if arr[i][j] != 0:
                flag=0
                melt(i,j)

    arr2 = copy.deepcopy(arr)

    ct=0  #덩어리 새는 카운트
    for i in range(N):
        for j in range(M):
            if arr2[i][j] !=0:
                ct+=1
                bfs(i,j)

    if ct >=2:
        print(rs)
        exit(0)

print(0)