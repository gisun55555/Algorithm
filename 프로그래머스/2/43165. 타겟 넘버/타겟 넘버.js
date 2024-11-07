function solution(numbers, target) {
    function dfs(level, sum) {
        if (level === numbers.length) {
            return sum === target ? 1 : 0;
        }

        const add = dfs(level + 1, sum + numbers[level]);
        const subtract = dfs(level + 1, sum - numbers[level]);

        return add + subtract;
    }
    
    return dfs(0, 0);
}
