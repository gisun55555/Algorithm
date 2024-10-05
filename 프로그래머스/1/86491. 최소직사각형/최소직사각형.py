def solution(sizes):
    
    max1=0
    max2=0
    for i in range(len(sizes)):
        x=max(sizes[i])
        y=min(sizes[i])
        
        max1 = max(x,max1)
        max2 = max(y,max2)
    
    
    answer = max1*max2
    return answer