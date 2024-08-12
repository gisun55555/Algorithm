N=int(input())
lst=[int(input()) for _ in range(N)]
lst.sort()

import math
gcd=lst[1]-lst[0]
for i in range(2,N):
  gcd=math.gcd(lst[i]-lst[i-1],gcd)

divisor_lst=[]
for i in range(2,int(gcd**0.5)+1):
  if gcd%i==0:
    divisor_lst.append(i)
    divisor_lst.append(gcd//i)

divisor_lst.append(gcd)
divisor_lst=list(set(divisor_lst))
divisor_lst.sort()

print(*divisor_lst)