


def solution(bandage, health, attacks):
    
    
    healthcheck= health
    def maxcheck(x):
        if x>=healthcheck:
            return healthcheck
        else:
            return x
    
    # 어택카운트 세기
    atcount =0
    health = health
    length = attacks[-1][0]
    attatckime = attacks[atcount][0]
    continueCheck=-1
    
    for i in range(length+1):
        if i == attatckime:
            health -=attacks[atcount][1]
            if health <=0:
                return -1
            if atcount < len(attacks)-1:
                atcount +=1
            attatckime =attacks[atcount][0]
            continueCheck=0
            
        else:
            health +=bandage[1]
            health=maxcheck(health)

            
            continueCheck +=1
            if continueCheck ==bandage[0]:
                health +=bandage[2]
                health=maxcheck(health)
                continueCheck=0
        print(health)

    return health