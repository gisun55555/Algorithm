function solution(players, callings) {
    let rank = {};
    players.forEach((player, index) => {
        rank[player] = index;
    });

    for (let call of callings) {
        let curIdx = rank[call]; 
        if (curIdx > 0) { 
            let prevIdx = curIdx - 1; 
            let prevPlayer = players[prevIdx]; 

            [players[curIdx], players[prevIdx]] = [players[prevIdx], players[curIdx]];

            rank[call] = prevIdx;
            rank[prevPlayer] = curIdx;
        }
    }

    return players;
}
