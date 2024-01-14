t, n = map(int, input().split())

lst = []
for i in range(n):
    a = input()
    lst.append(a)

lst.reverse()
lst2 = list(dict.fromkeys(lst))
lst2.reverse()

# t와 lst2의 길이를 비교
if t > len(lst2):
    t = len(lst2)

for i in range(t):
    print(lst2[i])
