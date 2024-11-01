n, kim, lim = map(int, input().split())
round_count = 0

while kim != lim:
    kim = (kim + 1) // 2
    lim = (lim + 1) // 2
    round_count += 1

print(round_count)
