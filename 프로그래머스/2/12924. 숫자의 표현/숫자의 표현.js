function solution(n) {
    let count = 0;

    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        let m = (n - k * (k - 1) / 2) / k;

        if (m % 1 === 0) {
            count++;
        }
    }

    return count;
}

