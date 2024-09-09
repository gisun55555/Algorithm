import sys
input = sys.stdin.readline


n,m = map(int, input().split())
d={}


for i in range(n):
    targer = input().strip()

    if len(targer) <m:
        continue
    if d.get(targer):
        d[targer][0] +=1
    else:
        d[targer] = [1,len(targer),targer]


ans = sorted(d.items(),key= lambda x:(-x[1][0],-x[1][1],x[1][2]))



for a in ans:
    print(a[0])