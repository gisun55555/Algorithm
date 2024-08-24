
n, k = map(int, input().split())

case = []
def dfs(numbers, sumation, target):
    global case

    if sumation == target:
        case.append(numbers)
        return
    if sumation > target:
        return

    for i in [1, 2, 3]:
        dfs(numbers + [i], sumation + i, target)

dfs([], 0, n)
if k - 1 < len(case):
    print("+".join(map(str, case[k-1])))
else:
    print(-1)