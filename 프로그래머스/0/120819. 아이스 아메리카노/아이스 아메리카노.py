def solution(money):
    
    b = money % 5500
    a=money // 5500
    
    answer = []
    answer.append(a)
    answer.append(b)
    
    return answer