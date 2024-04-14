target= int(input())


sum=1
cnt=1
for i in range(2,100000):
    if target<=sum:
        sum-=i-1
        break
    sum+=i
    cnt+=1

rst_a=0
rst_b=0
# print(target)
# print(sum)
# print(cnt)
if cnt%2==1:
    rst_b=target-sum
    rst_a=(cnt+1)-(target-sum)
else:
    rst_a=target-sum
    rst_b=(cnt+1)-(target-sum)

print(f'{rst_a}/{rst_b}')