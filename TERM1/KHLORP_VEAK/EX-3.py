
def reverseText(string):
    result=''
    for j in range(len(string)):
        result+=string[-j-1]
    return result
arr=eval(input("Enter: "))
array=[]
for i in range(len(arr)):
    res=arr[-i-1]
    array.append(reverseText(res))
print(array)