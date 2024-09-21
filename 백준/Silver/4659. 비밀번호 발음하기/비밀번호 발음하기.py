# import sys
# input= sys.stdin.readline
while 1>0:
    a= input()
    lst = list(a)
    if a =='end':
        break


    flag =0

    # 기본 조건 

    if 'a' in lst or 'e' in lst or 'i' in lst or 'u' in lst or 'o' in lst:
        flag=1

    cnt1=0
    cnt2=0
    for i in range(len(lst)):
        if flag ==0:
            break
        if lst[i] in ['a','e','i','o','u']:
            cnt1 +=1
            cnt2 =0
            if cnt1 ==3:
                flag =0
                break
        else:
            cnt2 +=1
            cnt1 =0
            if cnt2 ==3:
                flag =0
                break




    

    # 같은 녀석 학인법

    for i in range(1,len(lst),1):
        if lst[i] == 'e' or lst[i] == 'o':
            continue

        if flag ==0:
            break
        if lst[i-1] == lst[i]:
            flag =0

    if flag ==0:
        print('<',end='')
        for i in lst:
            print(i,end='')
        print('> is not acceptable.')


    else:
        print('<',end='')
        for i in lst:
            print(i,end='')
        print('> is acceptable.')

