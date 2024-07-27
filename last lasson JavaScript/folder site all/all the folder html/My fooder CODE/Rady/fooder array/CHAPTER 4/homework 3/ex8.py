

# Ex8 - Array
# Reverse array and reverse text in array
# output: 
# ['coconut','banana']
# ['ananab','tunococ']

def resverArr(arr):
    lastIndex=len(arr)-1
    newArr=[]
    for i in range(len(arr)):
        newArr.append(arr[lastIndex-i])
    return newArr
def reverseString(word):
    lastIndex=len(word)-1
    result=""
    for i in range(len(word)):
        result+=word[lastIndex-i]
    return result
arr=['banana','coconut']
print(resverArr(arr))
for i in range(len(arr)):
    arr[i]=ResourceWarning(arr[i])
repr(arr)
