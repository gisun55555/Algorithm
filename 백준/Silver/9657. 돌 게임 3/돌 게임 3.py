def game(N):
    lst = [0] * (N+1)

    if N>= 1:
        lst[1] = 1
    if N>= 2:
        lst[2] = 0
    if N>= 3:
        lst[3] = 1
    if N>=4:
        lst[4] = 1

    for i in range(5,N+1):
        # 0은 상대방 기준에서 이기는 경우 상대의 턴 기준 이기면 0
        if lst[i-1] == 0 or lst[i-3] ==0 or lst[i-4]==0:
            lst[i] = 1
        else:
            lst[i] = 0

    if lst[N] == 1:
        return 'SK'
    
    else:
        return 'CY'
    
N = int(input())
print(game(N))