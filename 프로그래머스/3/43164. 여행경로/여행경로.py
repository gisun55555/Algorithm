from collections import defaultdict


def solution(tickets):
    graph = defaultdict(list)
    
    for a,b in tickets:
        graph[a].append(b)
    print(graph)
    
    for key in graph:
        graph[key].sort(reverse=True)
    route =[]
    
    def dfs(airport):
        while graph[airport]:
            next_airport = graph[airport].pop()
            dfs(next_airport)
        route.append(airport)
    
    dfs("ICN")
    
        
    
    
    return route[::-1]


