# Ex3:
# number of array: 2
# > [3, 2]
# > [1, 3, 4]

# output:
# 2.5
# 2.66666666
# ------------------------------------

def squareNumber(n):
    return n * n 
numberOfArr=int(input())
for i in range(numberOfArr):
    arr=eval(input())
    for j in range(len(arr)):
        arr[j]=squareNumber(arr[j])
    print(arr)