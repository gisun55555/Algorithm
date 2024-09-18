n, k = input().split()
n = int(n)


setBox = set()
for i in range(n):
    a = input()
    setBox.add(a)


if k == 'Y':
    result = len(setBox)//1
    print(result)

if k == 'F':
    result = len(setBox)//2
    print(result)


if k == 'O':
    result = len(setBox)//3
    print(result)
