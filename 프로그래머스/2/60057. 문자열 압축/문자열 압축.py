def solution(s):
    if len(s) ==1:
        return 1
    
    result = []
    
    for i in range(1,len(s)//2+1):
        compressed =''
        prev = s[:i]
        count = 1
        
        for j in range(i,len(s)+i,i):
            if prev == s[j:j+i]:
                count +=1
            else:
                if count >1:
                    compressed +=str(count)+prev
                else:
                    compressed +=prev
                prev = s[j:j+i]
                count =1
        if count>1:
            compressd += str(cont) + prev
        else:
            compressed +=prev
        
        result.append(len(compressed))
            
    
    
    return min(result)