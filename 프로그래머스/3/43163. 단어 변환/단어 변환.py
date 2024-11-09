def solution(begin, target, words):
    
    min_cnt=[float('inf')]
    
    used = [0]*len(words)
    
    
    def check(x,y):
        cnt=0
        for i in range(len(x)):
            if x[i]==y[i]:
                cnt+=1
        if cnt == len(begin)-1:
            return 1
        else:
            return 0
    
    def dfs(x,cnt):
        
        if x==target:
            if min_cnt[0]>cnt:
                min_cnt[0]=cnt
            return 
        
        
        for i in range(len(words)):
            if used[i]==1:
                continue
            if check(x,words[i])==1:
                used[i]=1
                dfs(words[i],cnt+1)
                used[i]=0
                
            
        
        
    dfs(begin,0)    
    if min_cnt[0]==float('inf'):
        answer=0
    else:
        answer=min_cnt[0]
    
    
    return answer