h,w= map(int,input().split())
arr = list(map(int,input().split()))

# 리스트 선언한거구나
left_max= [0] * w
right_max = [0] * w

max_h = 0
for i in range(w):
    left_max[i] = max_h = max(max_h,arr[i])

max_h=0
for i in range(w-1,-1,-1):
    right_max[i] = max_h = max(max_h,arr[i])


answer =0

for i in range(w):
    answer += min(left_max[i],right_max[i]) - arr[i]

print(answer)