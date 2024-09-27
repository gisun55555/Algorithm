import heapq
import sys
input=sys.stdin.readline

n=int(input())
lst=[]
for i in range(n):
    lst.append(int(input()))

heapq.heapify(lst)
sum=0
for i in range(1,len(lst)):
    a=heapq.heappop(lst)
    b=heapq.heappop(lst)
    sum+=(a+b)
    heapq.heappush(lst,(a+b))

print(sum)