n = int(input())

arr=[]
flag =0 
y=0
for i in range(n):
    lst = list(input())
    arr.append(lst)




    if flag==0 and '*'in lst:
        flag+=1
        h_x=lst.index('*')
        h_y=i+1
    

    # if flag==1:
arr.append([0 for i in range(9999)])
cnt1=0
cnt2=0
cnt3=0
cnt4=0
cnt5=0


for i in range(1,n):
    if h_x - i < 0:
        break
    if arr[h_y][h_x-i]=='*':
        arr[h_y][h_x-i]='_'
        cnt1+=1
    else:
        break

for i in range(1,n):
    if h_x + i >= n:
        break
    if arr[h_y][h_x+i]=='*':
        arr[h_y][h_x+i]='_'
        cnt2+=1
    else:
        break

for i in range(1,n):
    if h_y + i >= n:
        break
    if h_y + i >= n:
        break
    if arr[h_y+i][h_x]=='*':
        arr[h_y+i][h_x]='_'
        cnt3+=1
    else:
        break

for i in range(1,n):
    if h_y + cnt3 + i >= n or h_x - 1 < 0:
        break
    if arr[h_y+cnt3+i][h_x-1]=='*':
        arr[h_y+cnt3+i][h_x-1]='_'
        cnt4+=1
    else:
        break


for i in range(1,n):
    if h_y + cnt3 + i >= n or h_x + 1 >= n:
        break
    if arr[h_y+cnt3+i][h_x+1]=='*':
        arr[h_y+cnt3+i][h_x+1]='_'
        cnt5+=1
    else:
        break




print(h_y+1,h_x+1)
print(cnt1,cnt2,cnt3,cnt4,cnt5)
