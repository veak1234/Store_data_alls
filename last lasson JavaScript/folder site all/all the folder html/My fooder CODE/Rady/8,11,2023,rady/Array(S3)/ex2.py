
def numberOfCompare(arr):
    preValve=None
    count=0
    for i in range(len(arr)):
        if i==0:
            preValve=arr[i]
        else:
            if preValve < arr[i]:
                count+=1
            preValve=arr[i]
    return count
arr=eval(input("Enter : "))
print (numberOfCompare(arr))