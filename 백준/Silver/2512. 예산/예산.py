import sys
input = sys.stdin.readline
N = int(input())
burget_list =  list(map(int,input().split()))
total_burget = int(input())

start, end = 0, max(burget_list)

while start<= end:
    mid =(start+end)//2
    sum=0
    for i in burget_list:
        if i <= mid:
            sum+=i
        else:
            sum+=mid
    if sum<= total_burget:
        start = mid +1

    else:
        end=mid-1

print(end)
    