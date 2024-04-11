n= int(input())
rst=0

for i in range(n):
    target = list(input())
    # print(target)
    flag=0
    flag2=0
    used=[0]*200
    for i in range(len(target)):
        # print(ord(target[i]))
        flag2=1
        if ord(target[i])==flag:
            continue
        else:
            if used[ord(target[i])]==1:
                flag2=0
                break
            else:
                used[ord(target[i])]=1
                flag=ord(target[i])





    rst+=flag2
print(rst)

