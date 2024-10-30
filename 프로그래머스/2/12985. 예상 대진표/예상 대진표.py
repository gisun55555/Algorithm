def solution(N, A, B):
    round_count = 0

    while A != B:
        A = (A + 1) // 2  # 다음 라운드 번호 계산
        B = (B + 1) // 2  # 다음 라운드 번호 계산
        round_count += 1  # 라운드 증가

    return round_count
