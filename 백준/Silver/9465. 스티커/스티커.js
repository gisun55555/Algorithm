const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    solution(input);
    process.exit();
});

function solution(input) {
    const T = parseInt(input[0]);
    let index = 1;
    const results = [];

    for (let t = 0; t < T; t++) {
        const n = parseInt(input[index]);
        const stickers = [
            input[index + 1].split(' ').map(Number),
            input[index + 2].split(' ').map(Number)
        ];
        index += 3;

        if (n === 1) {
            results.push(Math.max(stickers[0][0], stickers[1][0]));
            continue;
        }

        // DP 배열 초기화
        const dp = Array.from(Array(2), () => Array(n).fill(0));
        dp[0][0] = stickers[0][0];
        dp[1][0] = stickers[1][0];
        dp[0][1] = stickers[1][0] + stickers[0][1];
        dp[1][1] = stickers[0][0] + stickers[1][1];

        // DP 배열 갱신
        for (let i = 2; i < n; i++) {
            dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickers[0][i];
            dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickers[1][i];
        }

        results.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
    }

    console.log(results.join('\n'));
}
