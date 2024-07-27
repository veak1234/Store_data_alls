
def sum(a,b):
    return a+b
def sumFrom(arr):
    if len(arr)==2:
        total=0
        for i in range(arr[0],arr[1]+1):
            total=sum(total,i)
        return total
    else:
        return "You got error"
arr=eval(input("Enter : "))
print(sumFrom(arr))