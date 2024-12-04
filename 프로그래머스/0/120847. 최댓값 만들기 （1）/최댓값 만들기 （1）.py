def solution(numbers):
    max_1 = numbers.pop(numbers.index(max(numbers)))
    max_2 = numbers.pop(numbers.index(max(numbers)))
    answer = max_1 * max_2
    return answer