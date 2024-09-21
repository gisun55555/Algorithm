import heapq
import sys
input=sys.stdin.readline

n=int(input())
h_lst=[]
lst=[]

for i in range(n):
    lst=list(map(int,input().split()))
    for j in range(len(lst)):
        if len(h_lst)<n:
            heapq.heappush(h_lst,lst[j])
        else:
            if lst[j]<h_lst[0]:continue
            else:
                heapq.heappop(h_lst)
                heapq.heappush(h_lst,lst[j])

print(h_lst[0])