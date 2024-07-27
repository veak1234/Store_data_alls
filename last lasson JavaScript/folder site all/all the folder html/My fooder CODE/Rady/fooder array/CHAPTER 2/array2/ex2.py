
# Ex2:
# number of array: 2
# > [3, 2]
# > [1, 3, 4]

# output:
# [2, 3]
# [4, 3, 1]

def reverseArray(array):
    lastIndex=len(array)-1
    newlist=[]
    for i in range(len(array)):
        newlist.append(array[lastIndex-i])
    return newlist
numberOfArrays=int(input())
for i in range(numberOfArrays):
    arr=eval(input())
    print(reverseArray(arr))
