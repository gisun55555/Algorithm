



def make(x):
    rst = x
    sum=0
    while x >0:
        sum +=x%10
        x=x//10
    
    y= sum + rst
    # print(y)
    
    return y

used = [0]*10001
# print(used)
for i in range(1,10001):
    flag=make(i)
    if flag >=10000:
        continue
    used[flag]=1

for i in range(1,10000):
    if used[i]==0:
        print(i)