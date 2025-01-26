const fs = require('fs');
let M = 0;
let sb = '';

function move(from, to) {
    sb += from + ' ' + to + '\n';
    M++;
}

function hanoi(N, from, to, rest) {
    if (N === 1) {
        move(from, to);
        return;
    }

    hanoi(N - 1, from, rest, to);
    hanoi(1, from, to, rest);
    hanoi(N - 1, rest, to, from);
}

function dHanoi(N, from, to, rest1, rest2) {
    if (N === 1) {
        move(from, to);
        return;
    } else if (N === 2) {
        move(from, rest2);
        move(from, to);
        move(rest2, to);
        return;
    }

    hanoi(N - 2, from, rest1, rest2);  // 1. (N - 2)개를 D가 아닌 기둥으로 옮기기
    move(from, rest2);  // 2. 두 번째로 큰 원판을 D가 아닌 비어있는 기둥으로 옮기기
    move(from, to);     // 3. 가장 큰 원판을 D로 옮기기
    move(rest2, to);    // 4. 두 번째로 큰 원판을 D로 옮기기
    dHanoi(N - 2, rest1, to, from, rest2);
}

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = parseInt(input, 10);
dHanoi(N, 'A', 'D', 'B', 'C');

console.log(M);
console.log(sb);
