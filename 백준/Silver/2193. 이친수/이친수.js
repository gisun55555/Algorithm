const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

function binary(n) {
    if (n === 1) return BigInt(1);
    if (n === 2) return BigInt(1);

    const dp = new Array(n + 1).fill(BigInt(0));
    dp[1] = BigInt(1);
    dp[2] = BigInt(1);

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(binary(n).toString());
