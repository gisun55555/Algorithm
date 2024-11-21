def solution(tickets):
    
    tickets.sort()
    used = [0] * len(tickets)
    channel = [0] * (len(tickets)+1)
    result = []
    
    def dfs(end,num):
        channel[num]=end
        
        if num == len(tickets):
            result.append(channel[:])
            
            return
        
        for i in range(len(tickets)):
            if used[i]==1: continue
            if tickets[i][0]==end: 
                used[i]=1
                dfs(tickets[i][1],num+1)
                used[i]=0
                channel[num+1]=0
                
    for i in range(len(tickets)):
        if tickets[i][0] == "ICN":
            used[i]=1
            channel[0]=tickets[i][0]
            dfs(tickets[i][1],1)
            channel[0]=0
            used[i]=0
        
        
    # print(result)
    return result[0]
