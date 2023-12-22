from collections import deque
import copy


# 빙산 녹이는 함수
def melt(y,x): #빙산녹는다
    ct=0 #차감할 함수
    for i in range(4):
        dy = y + dyl[i]
        dx = x + dxl[i]
        if arr3[dy][dx] == 0:   #복사본 기준으로 확인해주는게 중요하다..!
            ct +=1
    
    if arr[y][x] - ct < 0: # 0보다 작을 경우 0으로 배출
        arr[y][x] =0
        return
    else: # 아닐 경우 기존 수식 진행
        arr[y][x] = arr[y][x] - ct

# 하나의 섬을 카운터하는 bfs
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

rs=0 #몇 년후에 되는지 카운터하는 변수

flag=0 # arr 배열에서 모두 0 이 아니라면 발동하는 플래그

while flag ==0:
    rs+=1 #결과값 출력
    flag =1 
    arr3 = copy.deepcopy(arr) # 빙하 녹이는 비교용! 중요 이게 없으면 arr녹으면서 확인하는 거라 비교를 위한 복사본 필요하다..!

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