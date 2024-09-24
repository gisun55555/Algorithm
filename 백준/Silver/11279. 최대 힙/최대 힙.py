import heapq
import sys
input=sys.stdin.readline
arr=[]
n=int(input())

for i in range(n):
    cm=int(input())
    if cm==0:
        if len(arr)==0:
            print(0)
        else:
            print(heapq.heappop(arr)[1])
    else:
        heapq.heappush(arr,(-cm,cm))