def solution(n):
    target = n
    ct = 0
    for i in range(2, target + 1):  # 2부터 target까지 모든 수에 대해 검사
        is_prime = True  # i가 소수인지를 나타내는 플래그
        for j in range(2, int(i ** 0.5) + 1):  # 2부터 i의 제곱근까지 검사
            if i % j == 0:  # i가 j로 나누어 떨어지면, i는 소수가 아님
                is_prime = False
                break
        if is_prime:
            ct += 1  # i가 소수이면, 카운트를 증가시킴
    return ct  # 총 소수의 개수를 반환
