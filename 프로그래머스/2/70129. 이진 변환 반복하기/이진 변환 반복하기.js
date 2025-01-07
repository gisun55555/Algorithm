function solution(s) {
    let count = 0;
    let removedZeros = 0; 

    while (s !== "1") {
        const zeroCount = s.split("0").length - 1;
        removedZeros += zeroCount;

        const length = s.replace(/0/g, "").length;

        s = length.toString(2);

        count++;
    }

    return [count, removedZeros];
}
