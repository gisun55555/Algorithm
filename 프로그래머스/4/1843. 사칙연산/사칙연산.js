function solution(arr) {
  const nums = [];
  const ops = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) nums.push(Number(arr[i]));
    else ops.push(arr[i]);
  }

  const n = nums.length;

  const maxDp = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  const minDp = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    maxDp[i][i] = nums[i];
    minDp[i][i] = nums[i];
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;

      for (let k = i; k < j; k++) {
        const op = ops[k];

        if (op === "+") {
          const candMax = maxDp[i][k] + maxDp[k + 1][j];
          const candMin = minDp[i][k] + minDp[k + 1][j];

          maxDp[i][j] = Math.max(maxDp[i][j], candMax);
          minDp[i][j] = Math.min(minDp[i][j], candMin);
        } else { // "-"
          const candMax = maxDp[i][k] - minDp[k + 1][j];
          const candMin = minDp[i][k] - maxDp[k + 1][j];

          maxDp[i][j] = Math.max(maxDp[i][j], candMax);
          minDp[i][j] = Math.min(minDp[i][j], candMin);
        }
      }
    }
  }

  return maxDp[0][n - 1];
}