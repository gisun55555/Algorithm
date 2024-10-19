def solution(a, b):
    c = str(a) + str(b)
    d = str(b) + str(a)
    
    c = int(c)
    d = int(d)
    
    answer = max(c, d)
    
    return answer
