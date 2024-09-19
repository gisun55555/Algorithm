import heapq
import sys
input=sys.stdin.readline
t=int(input())
for tc in range(t):
    n=int(input())
    lst=list(map(int,input().split()))
    heapq.heapify(lst)
    flag=0
    a=0
    b=0
    sum=0
    for i in range(len(lst)):
        if len(lst)==1:
            print(sum)
        else:
            a=heapq.heappop(lst)
            b=heapq.heappop(lst)
            heapq.heappush(lst,(a+b))
            sum+=(a+b)