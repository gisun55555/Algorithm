function solution(sides) {
     sides.sort((a, b) => a - b);
    if (sides[2] < sides[0] + sides[1]) {
        return 1; // 삼각형을 만들 수 있음
    } else {
        return 2; // 삼각형을 만들 수 없음
    }
}