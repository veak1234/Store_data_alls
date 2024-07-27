# Ex5:
# Find index of number in list (each value is unique)
# Test case 1:
# Enter array: [1,2,4,10,9]
# Enter number: 10
# ouput
# 10 at position 3

# Test case 2:

# Enter array: [5,4,10,3]
# Enter number: 5
# ouput
# 5 at position 0

# Test case 3:

# Enter array: [5,4,10,3]
# Enter number: 8
# ouput
# 8 not found in list

def findPositon(arr,number):
    for i in range(len(arr)):
        if arr [i]==number:
            return i
    return False
array=eval(input())
myNumber=int(input())
result=findPositon(array, myNumber)
if result != False:
    print(result)
else:
    print(str (myNumber) + " Not found ")