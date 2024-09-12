# list = ['map','set']



# print(list.index('map'))
# list.pop(list.index('map'))


# print(list)

# import sys
# input = sys.stdin.readline
# n, m = map(int,input().split())
# memo = []

# for i in range(n):
#    memo.append(input())

# # print(memo)

# for i in range(m):
#    keyword = list(input().split(','))
#    # print(keyword)
#    for i in keyword:
#         if i in memo:
#             memo.pop(memo.index(i))

#    print(len(memo))

import sys
input = sys.stdin.readline
n, m = map(int,input().split())


cnt = 0
memo = {}

for i in range(n):
    memo[input().rstrip()] =1
    cnt +=1

for i in range(m):
   using = list(map(str, input().rstrip().split(',')))

   for i in using:
       if memo.get(i):
           cnt -=1
           del memo[i]
   print(cnt)
