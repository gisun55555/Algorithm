const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = BigInt(input.shift());  // N을 BigInt로 변환
const distanceList = input[0].split(' ').map(BigInt); // 거리도 BigInt 배열로 변환
const cityList = input[1].split(' ').map(BigInt); // 리터당 가격도 BigInt 배열로 변환

let answer = BigInt(0); // 결과값도 BigInt로 초기화
let minPrice = cityList[0]; // 최소 기름값을 첫 번째 도시로 초기화

// 최소 주유 가격을 유지하면서 거리 × 가격 계산
for (let i = 0; i < distanceList.length; i++) {
    if (cityList[i] < minPrice) {
        minPrice = cityList[i]; // 더 작은 가격을 만나면 갱신
    }
    answer += minPrice * distanceList[i]; // BigInt 연산
}

console.log(answer.toString()); // BigInt는 그냥 출력하면 "n"이 붙으므로 문자열로 변환
