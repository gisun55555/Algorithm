def solution(n, lost, reserve):
    answer=n
    lst = [1 for i in range(n+2)]
    # print(lst)
    
    for i in reserve:
        lst[i]=2
    
    for i in lost:
        lst[i]-=1
    # print(lst)
    
    
    for i in range(1,len(lst)):
        if lst[i]==0:
            if lst[i-1]==2:
                lst[i-1]-=1
                lst[i]=1
            elif lst[i+1]==2:
                lst[i+1]-=1
                lst[i]=1
    
    for i in range(1,len(lst)):
        if lst[i]==0:
            answer -=1
        
                
            
    
    
        
    
    
    
    
    return answer