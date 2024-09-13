N=int(input())
lst=[]
for i in range(N):
    x,y=map(int,input().split())
    lst.append((x,y))

lst.sort()
# print(lst)
max_1=0
index_1=0
rs=0
# print(lst)
for i in range(0,N):
    if lst[i][1]>max_1:

        rs+=max_1*(lst[i][0]-index_1)
        max_1=lst[i][1]
        index_1=lst[i][0]
        Stop=i
rs+=max_1

# if lst[Stop][0]==lst[-1][0]:
#     print(rs)
while lst[Stop][0]!=lst[-1][0]:
    max_1=0
    index_2=0
    for i in range(Stop+1,N):
        if lst[i][1]>max_1:
            max_1=lst[i][1]
            index_2=lst[i][0]
            Stop=i
    rs+=max_1*(index_2-index_1)
    index_1=index_2

   
print(rs)