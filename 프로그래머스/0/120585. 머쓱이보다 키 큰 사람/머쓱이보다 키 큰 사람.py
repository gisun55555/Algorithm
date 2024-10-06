def solution(array, height):
    array.append(height)
    array2 = sorted(array, reverse=True)
    answer = array2.index(height)
    
    return answer