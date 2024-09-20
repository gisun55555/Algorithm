p, m = map(int, input().split())

arr = []
x1, x2 = input().split()
x1 = int(x1)
arr.append([[x1,x2]])
# print(arr)

for i in range(p-1):
    # print(arr)

    x1, x2 = input().split()
    x1 = int(x1)

    flag = 0
    for i in range(len(arr)):
        if len(arr[i]) >= m:
            continue
        center = arr[i][0][0]

        if center-10<= x1 <= center+10:
            arr[i].append([x1,x2])
            flag =1
            break
    
    if flag ==0:
        arr.append([[x1,x2]])
        



for i in range(len(arr)):
    arr[i] = sorted(arr[i], key=lambda x: x[1])


for i in range(len(arr)):


    if len(arr[i]) ==m:
        print('Started!')
        for j in range(len(arr[i])):
            print(arr[i][j][0],end=' ')
            print(arr[i][j][1])

    
    else:
        print('Waiting!')
        for j in range(len(arr[i])):
            print(arr[i][j][0],end=' ')
            print(arr[i][j][1])
