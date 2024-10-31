n,m = map(int,input().split())

lst =[i+1 for i in range(n)]

for i in range(m):
    idx_x,idx_y = map(int,input().split())
    lst[idx_x-1],lst[idx_y-1]=lst[idx_y-1],lst[idx_x-1]

for i in lst:
    print(i,end=' ')