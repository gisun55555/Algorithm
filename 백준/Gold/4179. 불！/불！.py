# 큐에 불부터 담아야하는 그 이유를 예시로 들면
# 사람이 지나가고 그 위에 불이 덮치면은 인명사고가 난다!
# 선입선출 구조여서 순서대로 진행된다면 한 턴 한 턴 나가기 때문에 bfs 는 하나의 q로 진행한다

from collections import deque
q = deque()
n,m = map(int,input().split())

arr= [ list(input()) for i in range(n)]
dxl=[0,0,1,-1]
dyl=[1,-1,0,0]
# print(arr)

# j 부터 찾아서 q에 넣기
q = deque()


# 불덩이를 찾아서 q에 넣어준다 비지티드는 사용하지 않을거다 간곳은 배열에 바로 0 처리
for i in range(n):
    for j in range(m):
        if arr[i][j] == 'F':
            arr[i][j] = 0
            q.append([i,j,0])

# 시작점을를 찾아서 q에 넣어준다 비지티드는 사용하지 않을거다 간곳은 배열에 바로 c+1 처리
for i in range(n):
    for j in range(m):
        if arr[i][j] == 'J':
            if i==0 and -1<j<m: #탈출구에 J가 있는 경우(반례처리) 
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
                if arr[dy][dx] == 0: continue # 아닌 부분 continue 로해서 제작하자 불인 부분 컨티뉴 처리해주어야 무한 반복 없다
                if arr[dy][dx] != '#':
                    arr[dy][dx] = 0
                    q.append([dy,dx,0])
            if c != 0: # 지훈이 경우 앞으로 나아가기
                if arr[dy][dx] == 0: continue
                if arr[dy][dx] == '#': continue
                if arr[dy][dx] == '.': # 0이고, . 인데 테두리에 도착한 경우 답을 프린트하는 식으로 구조 만들었다
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

