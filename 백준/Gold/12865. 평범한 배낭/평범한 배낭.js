const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const items = input.slice(1).map((line) => {
  const [w, v] = line.split(" ").map(Number);
  return { weight: w, value: v };
});

const dp = Array(k + 1).fill(0);

for (const { weight, value } of items) {
  for (let currentWeight = k; currentWeight >= weight; currentWeight--) {
    dp[currentWeight] = Math.max(dp[currentWeight], dp[currentWeight - weight] + value);
  }
}

console.log(dp[k]); 
