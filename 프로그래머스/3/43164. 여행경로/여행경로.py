from collections import defaultdict


def solution(tickets):
    
    graph = defaultdict(list)
    for a, b in tickets:
        graph[a].append(b)
        # print(graph)
    
    for key in graph:
        graph[key].sort(reverse=True)
        # print(graph)
    
    route = []

    def dfs(airport):
        while graph[airport]:
            print(graph)
            next_airport = graph[airport].pop()
            dfs(next_airport)
        route.append(airport)
        print(route)

    dfs("ICN")
    return route[::-1]


print(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))