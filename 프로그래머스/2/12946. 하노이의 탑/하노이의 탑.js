function solution(n) {
    const moves = [];

    function hanoi(num, start, support, goal) {
        if (num === 1) {
            moves.push([start, goal]);
            return;
        }

        hanoi(num - 1, start, goal, support);

        moves.push([start, goal]);

        hanoi(num - 1, support, start, goal);
    }

    hanoi(n, 1, 2, 3);

    return moves;
}

