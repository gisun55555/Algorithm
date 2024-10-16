def solution(my_string):
    answer = ''
    
    for i in my_string:
    
        value_asc = ord(i)
        
        if 'A'<=i<='Z':
            answer+=(chr(value_asc+32))
        else:
            answer+=(chr(value_asc-32))
    
    
    return answer