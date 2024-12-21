def solution(rectangle, characterX, characterY, itemX, itemY):
    from collections import deque

    scale = 2  
    max_size = 102  
    grid = [[0] * max_size for _ in range(max_size)]

  
    for rec in rectangle:
        x1, y1, x2, y2 = map(lambda x: x * scale, rec)
        for x in range(x1, x2 + 1):
            for y in range(y1, y2 + 1):
                if x1 < x < x2 and y1 < y < y2:
                    grid[x][y] = -1 
                elif grid[x][y] != -1:
                    grid[x][y] = 1  

    start = (characterX * scale, characterY * scale)
    end = (itemX * scale, itemY * scale)
    queue = deque()
    queue.append((start[0], start[1], 0))
    visited = [[0] * max_size for _ in range(max_size)]
    visited[start[0]][start[1]] = 1

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        x, y, dist = queue.popleft()
        if (x, y) == end:
            return dist // 2  
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < max_size and 0 <= ny < max_size:
                if grid[nx][ny] == 1 and not visited[nx][ny]:
                    visited[nx][ny] = 1
                    queue.append((nx, ny, dist + 1))
    return -1
