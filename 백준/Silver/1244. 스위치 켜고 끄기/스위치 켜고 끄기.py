

def man(list, number):
    # while number<len(list):


    #     if list[number-1] ==1:
    #         list[number-1] =0
    #     else:
    #         list[number-1]=1
        
    #     number *=2
    index = number - 1  
    while index < len(list):
        list[index] = 1 - list[index]
        index += number 

def woman(list,number):

    i=1
    flag=0
    # print(list)
    if list[number] ==1:
        list[number] =0
    else:
        list[number]=1

    while flag==0 and (number - i >= 0) and (number + i < len(list)):

        if list[number-i]==list[number+i]:
            if list[number-i] ==1:
                list[number-i] =0
            else:
                list[number-i]=1

            if list[number+i] ==1:
                list[number+i] =0
            else:
                list[number+i]=1
            
            i+=1
        else:
            flag=1


    # if i==1 and flag==1:
    #     if list[number] ==1:
    #         list[number] =0
    #     else:
    #         list[number]=1





n=int(input())
list_ = list(map(int,input().split(' ')))
t=int(input())





for i in range(t):



    x = list(map(int,input().split(' ')))

    # print(x)

    if x[0]==1:
        man(list_,x[1])
        # for i in range(len(list_)):
        #   print(list_[i],end=' ')     
    else:
        woman(list_,x[1]-1)
    
    

for i in range(len(list_)):
    print(list_[i],end=' ')
    if (i + 1) % 20 == 0:
        print()
