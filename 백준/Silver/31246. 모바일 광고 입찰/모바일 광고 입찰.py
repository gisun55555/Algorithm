import sys
input = sys.stdin.readline
N,K = map(int, input().split())

win0 = 0
pos = []

for i in range(N):
    A,B = map(int, input().split())
    d = B - A
    if d<= 0:
        win0 +=1
    else:
        pos.append(d)
if win0 >= K:
    print(0)
else:
    need = K- win0
    pos.sort()
    print(pos[need-1])