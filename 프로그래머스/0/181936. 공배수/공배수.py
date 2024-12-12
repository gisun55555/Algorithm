def solution(number, n, m):
    
    
    
    answer = 1
    
    if number % n!=0:
        answer=0
    if number % m!=0:
        answer=0
    
    return answer