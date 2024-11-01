import sys

# 입력을 여러 줄로 받아 처리
input_lines = sys.stdin.read().splitlines()  # strip()을 제거하여 모든 공백 포함

for target in input_lines:
    a = 0      # 소문자 개수
    A = 0      # 대문자 개수
    number = 0 # 숫자 개수
    blink = 0  # 공백 개수

    # 각 문자에 대해 조건 확인 및 카운트
    for i in target:
        if i.islower():       # 소문자 확인
            a += 1
        elif i.isupper():     # 대문자 확인
            A += 1
        elif i.isdigit():     # 숫자 확인
            number += 1
        elif i == ' ':        # 공백 확인
            blink += 1
    
    # 한 줄의 결과 출력
    print(a, A, number, blink)  # f-string 사용하지 않고, 쉼표로 구분해 출력
