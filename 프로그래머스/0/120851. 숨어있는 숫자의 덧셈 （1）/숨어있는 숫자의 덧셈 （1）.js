function solution(my_string) {
    return my_string
        .split('')
        .filter(char => !isNaN(char)&& char !==' ')
        .map(Number)
        .reduce((sum, num) => sum +num,0)
}