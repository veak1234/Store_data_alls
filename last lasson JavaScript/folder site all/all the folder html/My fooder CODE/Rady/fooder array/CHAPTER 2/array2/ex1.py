
# Ex1:
# number of array: 3
# > [3, 3]
# > [1, 3, 4]
# > [4, 5, 9, 1]

# output:
# 6
# 8
# 19

def sum(array):
    total=0
    for i in range(len(array)):
        total+=array[i]
    return total
numberOfArrays=int(input())
for i in range(numberOfArrays):
    arr=eval(input())
    print(sum(arr))
