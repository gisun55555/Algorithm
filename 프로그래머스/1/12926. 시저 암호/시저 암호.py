def solution(s, n):
    
    result = ''
    for i in range(len(s)):
        x=0
        
        if ord('a')<=ord(s[i])<=ord('z'):
            x=ord(s[i])+n
            if x>ord('z'):
                x-=26
            
            result+=chr(x)
            
            
            
        
        elif ord('A')<=ord(s[i])<=ord('Z'):
            x=ord(s[i])+n
            if x>ord('Z'):
                x-=26
            
            result+=chr(x)
        
        else:
            result +=s[i]
    
    
    
    return result