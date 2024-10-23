def solution(str1, str2):
    
    answer = 0
    
    for i in range(0,len(str2)-(len(str1)-1)):
        cnt =0
        
        for j in range(len(str1)):
            
            
            if str2[i+j]==str1[j]:
                cnt+=1
            
            if cnt==len(str1):
                answer=1
                break
                
        

    
    
    return answer