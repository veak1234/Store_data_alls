
def numberOfEight(array):
    sum=0
    isA=False
    for i in range(len(array)):
        if array[i]==8:
            sum+=1
            isA=True
    if isA==False:
        sum=-1
    return sum
print(numberOfEight([2,3,5]))
