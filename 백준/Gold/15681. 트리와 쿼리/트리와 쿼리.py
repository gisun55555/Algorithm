import sys
input = sys.stdin.read
data = input().split()

n, r, q = int(data[0]), int(data[1]), int(data[2])

li = [[] for _ in range(n + 1)]
sz = [0] * (n + 1)

for i in range(n - 1):
    u, v = int(data[3 + 2 * i]), int(data[4 + 2 * i])
    li[u].append(v)
    li[v].append(u)

stack = [(r, -1)]
order = []

while stack:
    cur, prv = stack.pop()
    order.append((cur, prv))
    for nxt in li[cur]:
        if nxt != prv:
            stack.append((nxt, cur))

for cur, prv in reversed(order):
    sz[cur] = 1
    for nxt in li[cur]:
        if nxt != prv:
            sz[cur] += sz[nxt]

output = []
for i in range(q):
    u = int(data[3 + 2 * (n - 1) + i])
    output.append(str(sz[u]))

print("\n".join(output))
