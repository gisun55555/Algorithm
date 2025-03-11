function solution(arrows) {
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];

    const visitedNodes = new Set();
    const visitedEdges = new Set();

    let x = 0, y = 0;
    visitedNodes.add(`${x},${y}`);

    let roomCount = 0;

    for (const arrow of arrows) {
        for (let i = 0; i < 2; i++) { 
            let nx = x + dx[arrow];
            let ny = y + dy[arrow];

            const nodeKey = `${nx},${ny}`;
            const edgeKey = `${x},${y}-${nx},${ny}`;
            const reverseEdgeKey = `${nx},${ny}-${x},${y}`;

            if (visitedNodes.has(nodeKey) && !visitedEdges.has(edgeKey)) {
                roomCount++; 
            }

            visitedNodes.add(nodeKey);
            visitedEdges.add(edgeKey);
            visitedEdges.add(reverseEdgeKey);

            x = nx;
            y = ny;
        }
    }

    return roomCount;
}
