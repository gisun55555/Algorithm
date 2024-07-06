const fs = require('fs');

// input을 파일에서 읽어오는 경우
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

// 누적 합 배열 만들기
const prefixSum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
}

// 질의 처리 및 출력
const results = [];
for (let k = 0; k < M; k++) {
    const [i, j] = input[2 + k].split(' ').map(Number);
    results.push(prefixSum[j] - prefixSum[i - 1]);
}

console.log(results.join('\n'));
