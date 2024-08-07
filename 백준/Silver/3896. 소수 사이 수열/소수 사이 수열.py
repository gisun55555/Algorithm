import sys; input = sys.stdin.readline
from bisect import bisect

# sieve
MAX = 1299710
is_prime = [True] * MAX
primes = []
for i in range(2, MAX):
    if is_prime[i]:
        primes.append(i)
        for j in range(i ** 2, MAX, i):
            is_prime[j] = False

for _ in range(int(input())):
    k = int(input())

    # 소수면 0 출력
    if is_prime[k]:
        print(0)

    # 합성수면 k를 포함하는 연속하는 두 소수의 차 출력
    else:
        idx = bisect(primes, k)
        print(primes[idx] - primes[idx - 1])