

def sumBetweenNumberTwo(arr):
    sum=0
    isA=False
    counter=0
    for i in range(len(arr)):
        if arr[i]==2:
            isA=True
            counter+=1
        elif isA:
            if counter %2==1:
                sum+=arr[i]
            else:
                counter=0
                isA=False
arr=[2,2,2,2,5,6,2,6,7]
print(sum)
