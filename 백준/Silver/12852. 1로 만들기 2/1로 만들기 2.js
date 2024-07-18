const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const i = parseInt(input);

const dpArray = Array.from({ length: i + 1 }, () => [Infinity, []]);

dpArray[1][0] = 0; // 1을 1로 만드는 연산은 0번 필요함
dpArray[1][1] = [1];

for (let n = 2; n <= i; n++) {
    // 이전 값을 사용한 연산
    if (dpArray[n][0] > dpArray[n - 1][0] + 1) {
        dpArray[n][0] = dpArray[n - 1][0] + 1;
        dpArray[n][1] = [n, ...dpArray[n - 1][1]];
    }

    // 2로 나눌 수 있는 경우
    if (n % 2 === 0 && dpArray[n][0] > dpArray[n / 2][0] + 1) {
        dpArray[n][0] = dpArray[n / 2][0] + 1;
        dpArray[n][1] = [n, ...dpArray[n / 2][1]];
    }

    // 3으로 나눌 수 있는 경우
    if (n % 3 === 0 && dpArray[n][0] > dpArray[n / 3][0] + 1) {
        dpArray[n][0] = dpArray[n / 3][0] + 1;
        dpArray[n][1] = [n, ...dpArray[n / 3][1]];
    }
}

console.log(dpArray[i][0]);
console.log(dpArray[i][1].join(' '));
