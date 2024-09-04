n, k = map(int, input().split())
items = []

for _ in range(n):
    w, v = map(int, input().split()) 
    items.append((w, v))

dp = [0] * (k + 1)

for w, v in items:
    for current_weight in range(k, w - 1, -1):
        dp[current_weight] = max(dp[current_weight], dp[current_weight - w] + v)

print(dp[k])
