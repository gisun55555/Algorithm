function solution(t, p) {
    let count = 0;
    let pLength = p.length;
    let pNum = BigInt(p); // p가 길 경우를 대비하여 BigInt 사용

    for (let i = 0; i <= t.length - pLength; i++) {
        let subNum = BigInt(t.substring(i, i + pLength));
        if (subNum <= pNum) {
            count++;
        }
    }
    
    return count;
}