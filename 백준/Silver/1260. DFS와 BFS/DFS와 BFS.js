const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
}

graph.forEach(adjList => adjList.sort((a, b) => a - b));

const dfs = (current, visited) => {
    process.stdout.write(current + ' ');
    visited[current] = true;

    for (const neighbor of graph[current]) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited);
        }
    }
};

const bfs = (start) => {
    const queue = [start];
    const visited = Array(N + 1).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
        const current = queue.shift();
        process.stdout.write(current + ' ');

        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
};

const visitedDfs = Array(N + 1).fill(false);
dfs(V, visitedDfs);
console.log();
bfs(V);
