function solution(num_list) {
    
    
    num_list = num_list.sort((a,b) => a-b)
    
    answer = num_list.slice(0,5)
    
    
    return answer;
}