from collections import deque
import sys
input=sys.stdin.readline
lst = deque()

n= int(input())

for i in range(n):
    action=list(input().split())
    # print(action)
    if action[0] == 'push_front':
        lst.insert(0,action[1])
    elif action[0] =='push_back':
        lst.append(action[1])
    elif action[0] == 'pop_front':
        if len(lst) >0:
            x=lst.popleft()
            print(x)
        else:
            print(-1)
    elif action[0] == 'pop_back':
        if len(lst) >0:
            x=lst.pop()
            print(x)
        else:
            print(-1)
    elif action[0] == 'size':
        if len(lst) >0:
            print(len(lst))
        else:
            print(0)
    elif action[0] =='empty':
        if len(lst) >0:
            print(0)
        else:
            print(1)
    elif action[0] =='front':
        if len(lst) >0:
            print(lst[0])
        else:
            print(-1)
    elif action[0] =='back':
        if len(lst) >0:
            print(lst[-1])
        else:
            print(-1)    
    
