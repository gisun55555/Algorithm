def solution(tickets):
    tickets.sort()
    result = []  
    target = [""] * (len(tickets) + 1)  
    used = [0] * len(tickets)  

    def dfs(end, num):
        if num == len(tickets):  
            result.append(target[:])  
            return

        for i in range(len(tickets)):
            if used[i] == 1: 
                continue
            if tickets[i][0] == end:  
                used[i] = 1 
                target[num + 1] = tickets[i][1]  
                dfs(tickets[i][1], num + 1)  
                target[num + 1] = "" 
                used[i] = 0  

    for i in range(len(tickets)):
        if tickets[i][0] == 'ICN':  
            used[i] = 1  
            target[0] = 'ICN'  
            target[1] = tickets[i][1]  
            dfs(tickets[i][1], 1)  
            used[i] = 0 

    return result[0]
