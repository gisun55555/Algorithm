def solution(numbers, target):
    
    def dfs(index, current_sum):
        if index == len(numbers):
            if current_sum == target:
                return 1
            else:
                return 0
        
        add = dfs(index +1, current_sum + numbers[index])
        subtract = dfs(index +1, current_sum - numbers[index])
        
        return add + subtract
            
            
        
    return dfs(0,0)