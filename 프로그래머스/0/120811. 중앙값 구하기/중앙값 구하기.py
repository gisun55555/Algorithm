def solution(array):
    
    new_array = sorted(array)
    print(new_array)
    index = len(array)//2
    
    answer = new_array[index]
    return answer