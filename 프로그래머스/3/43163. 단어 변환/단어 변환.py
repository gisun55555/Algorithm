def solution(begin, target, words):
    if target not in words:
        return 0

    used = [False] * len(words)
    
    min_steps = [float('inf')]
    
    def check_difference(word1, word2):
        difference_count = 0
        for i in range(len(word1)):
            if word1[i] != word2[i]:
                difference_count += 1
        
        return difference_count == 1

    def dfs(current_word, step_count):
        if current_word == target:
            min_steps[0] = min(min_steps[0], step_count)
            return
        
        for i in range(len(words)):
            if used[i]:
                continue
            
            if check_difference(current_word, words[i]):
                used[i] = True
                dfs(words[i], step_count + 1)
                used[i] = False

    dfs(begin, 0)
    
    if min_steps[0] == float('inf'):
        return 0
    else:
        return min_steps[0]
