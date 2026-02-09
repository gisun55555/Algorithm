function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // 이어붙이기
    const concatenated = Number(String(N).repeat(i));
    dp[i].add(concatenated);

    // 조합
    for (let j = 1; j < i; j++) {
      const left = dp[j];
      const right = dp[i - j];

      for (const a of left) {
        for (const b of right) {
          dp[i].add(a + b);

          dp[i].add(a - b);
          dp[i].add(b - a); // ✅ 뺄셈 반대방향 추가

          dp[i].add(a * b);

          if (b !== 0) dp[i].add(Math.trunc(a / b));
          if (a !== 0) dp[i].add(Math.trunc(b / a));
        }
      }
    }

    // ✅ i단계 끝나고 체크 (j 밖)
    if (dp[i].has(number)) return i;
  }

  return -1;
}
