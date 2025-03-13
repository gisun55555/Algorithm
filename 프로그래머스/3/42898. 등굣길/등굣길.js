function solution(m, n, puddles) {
    const MOD = 1000000007;
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    puddles.forEach(([x, y]) => dp[y][x] = -1);

    dp[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if ((i === 1 && j === 1) || dp[i][j] === -1) continue;

            if (dp[i - 1][j] !== -1) dp[i][j] += dp[i - 1][j];

            if (dp[i][j - 1] !== -1) dp[i][j] += dp[i][j - 1];

            dp[i][j] %= MOD;
        }
    }

    return dp[n][m];
}
