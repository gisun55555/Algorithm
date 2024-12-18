function solution(num_list) {
    var answer = 0;
    
    if (num_list.length >= 11) {
        answer = num_list.reduce((acc, cur) => acc + cur, 0); // 초기값 0 설정
    } else  {
        answer = num_list.reduce((acc, cur) => acc * cur, 1); // 초기값 1 설정
    }
    
    return answer;
}