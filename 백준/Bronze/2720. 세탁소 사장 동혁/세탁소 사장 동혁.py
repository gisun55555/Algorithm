t = int(input())


for i in range(t):
    x = int(input())
    a=0
    b=0
    c=0
    d=0
    while x>0:
        if x >=25:
            x-=25
            a+=1
            continue
        

        if x >=10:
            x-=10
            b+=1
            continue

        if x >=5:
            x-=5
            c+=1
            continue

        if x >=1:
            x-=1
            d+=1
            continue

    print(f'{a} {b} {c} {d}')