import sys
input = sys.stdin.readline
n = int(input())

lst = []
for i in range(n):
    command = input().split()
    if command[0] == 'push':
        lst.append(command[1])
    elif command[0] == 'pop':
        if len(lst) > 0:
            target = lst.pop()
            print(target)
        else:
            print(-1)
    elif command[0] == 'size':
        print(len(lst))
    elif command[0] == 'empty':
        if len(lst) > 0:
            print(0)
        else:
            print(1)
    else:  
        if len(lst) == 0:
            print(-1)
        else:
            print(lst[-1])

# print(lst)

