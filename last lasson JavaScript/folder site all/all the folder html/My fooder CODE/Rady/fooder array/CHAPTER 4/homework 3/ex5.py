
# Ex5 - Array
#Count number
# Output: [ { 2: 4} , {3: 2} ]
# arr1: [2, 2, 3, 5, 2, 3, 2, 5, 8]
# arr2: [2, 3]
def countNumber(array,value):
    counter=0
    for n in array:
        if n ==value:
            counter+=1
    return counter
arr=[2,2,3,5,2,3,5,3]
list=[2,3,5]
newArray=[]
for n in list:
    newArray.append({n : countNumber(arr,n)})
print(newArray)


