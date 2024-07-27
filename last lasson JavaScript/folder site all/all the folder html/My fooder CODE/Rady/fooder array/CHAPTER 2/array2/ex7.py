# Ex7:
# Count number 10 in list of array 2D
# Test case 1:

# Enter array: [[1, 2, 4, 5], [14, 16, 10, 11], [10, 9, 10, 10]]
# ouput
# number 10 is 4

# Test case 2:
# Enter array: [[1, 2, 4, 5], [14, 16, 8, 11], [8, 9, 8, 8]]
# ouput
# number 10 is 0

def countNumberTen(arr):
    counter=0
    for n in arr:
        if n==10:
            counter+=1
    return counter
array=eval(input())
count=0
for arr in array:
    count+=countNumberTen(arr)
print(count)

