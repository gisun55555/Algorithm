from collections import deque

target = deque(input())
target.append('0')
target.append('0')

rst=0
# print(target)
while len(target) > 2:

    if target[0]=='c':
        if target[1]=='=' or target[1]=='-':
            target.popleft()
            target.popleft()
            rst+=1
        else:
            target.popleft()
            rst+=1
    elif target[0]=='d':
        if target[1]=='z' and target[2]=='=':
            target.popleft()
            target.popleft()
            target.popleft()
            rst+=1
        elif target[1]=='-':
            target.popleft()
            target.popleft()
            rst+=1
        else:
            target.popleft()
            rst+=1
    elif target[0]=='l' and target[1]=='j':
        target.popleft()
        target.popleft()
        rst+=1
    elif target[0]=='n' and target[1]=='j':
        target.popleft()
        target.popleft()
        rst+=1
    elif target[0]=='s' and target[1]=='=':
        target.popleft()
        target.popleft()
        rst+=1
    elif target[0]=='z' and target[1]=='=':
        target.popleft()
        target.popleft()
        rst+=1
    else:
        target.popleft()
        rst+=1
    



print(rst)



    