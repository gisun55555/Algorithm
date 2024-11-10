def solution(my_string):
    vowels = "aeiou"  # 모음 목록
    result = ''.join([char for char in my_string if char not in vowels])
    return result
