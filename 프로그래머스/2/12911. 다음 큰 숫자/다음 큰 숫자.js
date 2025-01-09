function solution(n) {
    const countOnes = (num) => num.toString(2).split('1').length - 1;
    const targetCount = countOnes(n);

    let nextNumber = n + 1;
    while (true) {
        if (countOnes(nextNumber) === targetCount) {
            return nextNumber;
        }
        nextNumber++;
    }
}

