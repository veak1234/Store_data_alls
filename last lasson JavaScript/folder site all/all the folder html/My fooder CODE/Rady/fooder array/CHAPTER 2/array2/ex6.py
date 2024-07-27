# Ex6:
# Count number in list 
# Test case 1:

# Enter array: [1,2,4,10,9]
# Enter number: 10
# ouput
# number 10 is 1

# Test case 2:

# Enter array: [5,4,5, 5, 5, 10,3]
# Enter number: 5
# ouput: 

# number 5 is 4

# Test case 3:

# Enter array: [5,4,10,3]
# Enter numbe 8
# ouput
# number 8 is 0

def countNumber(arr,number):
    counter=0
    for n in arr:
        if n==number:
            counter+=1
    return counter
array=eval(input())
myNumber=int(input())
print("Number "+ str(myNumber) +" is " + str(countNumber(array,myNumber)))


