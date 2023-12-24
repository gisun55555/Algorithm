import heapq
import sys
input=sys.stdin.readline

N=int(input())
heap_max=[] #중앙값돠 작은녀석 넣을곳
heap_min=[] #중앙값보다 큰녀석 넣을곳 
mdv=-20000

for i in range(N):
    target=int(input())

    if target>=mdv:
        heapq.heappush(heap_min,target)
    else:
        heapq.heappush(heap_max,-target)

    if len(heap_min)==len(heap_max)+2:
        a=heapq.heappop(heap_min)
        heapq.heappush(heap_max,-a)

    elif len(heap_min)+2==len(heap_max):
        b=heapq.heappop(heap_max)
        heapq.heappush(heap_min,-b)

    if len(heap_min)==len(heap_max)+1:
        mdv=heap_min[0]
        print(mdv)

    elif len(heap_min)+1==len(heap_max):
        mdv=-heap_max[0]
        print(mdv)
    else:
        print(-heap_max[0])
        mdv=(-heap_max[0]+heap_min[0])/2