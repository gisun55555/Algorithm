while 1>0:
    target = list(map(int, input().split()))
    # print(target)
    first = target.pop(target.index(max(target)))
    second = target.pop(target.index(max(target)))
    third = target.pop(target.index(max(target)))
    if first == 0:
        break
    if first >= second + third:
        
        print('Invalid')
        continue
    if first==second and first ==third:
        print('Equilateral')
        continue

    if first!=second and first !=third and second!=third:
        print('Scalene')
        continue
    
    if first==second or first ==third or second==third:
        print('Isosceles')
        continue
