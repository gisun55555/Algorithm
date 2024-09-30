def find(s):
    i = 1
    idx = 0

    while idx < len(s):
        current = str(i)

        for char in current:
            if idx < len(s) and char == s[idx]:
                idx  +=1
        
        i +=1

    
    return i - 1


S = input().strip()

print(find(S))