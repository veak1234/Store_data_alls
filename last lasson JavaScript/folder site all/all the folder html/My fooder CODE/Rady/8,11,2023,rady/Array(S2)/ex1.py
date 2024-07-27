
def sum(Array,number):
    count=0
    count1=0
    for i in range(len(Array)):
        count+=int(Array[i])
    for i in range(len(number)):
        count1+=int(number[i])
    return str(count)+"\n" +str(count1)
Array=eval(input())
number=eval(input())
print(sum(Array,number))
