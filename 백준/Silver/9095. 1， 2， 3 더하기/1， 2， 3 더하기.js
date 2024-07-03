function solve(input) {
    const T = parseInt(input[0], 10);
    const ns = input.slice(1).map(Number);

    const maxN = 11;
    const dp = Array(maxN).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i < maxN; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }

    const results = ns.map(n => dp[n]);
    results.forEach(result => console.log(result));
}

// 백준 온라인 저지에서 입력을 처리하는 부분
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    solve(input);
    process.exit();
});
