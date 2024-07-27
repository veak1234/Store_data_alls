# 1.	The program asks user to enter the start value and the end value: 
# Start value: 2
# End value: 5
# 2.	The program will print the sum of numbers between start and end values
# The sum of numbers between 2 and 5 is: 14

# number=int(input())
# number1=int(input())
# while number<=number1:
#     print(number)
#     number+=1

def sum(n1,n2):
    return n1+n2
def sumFromTo(start, end):
    total=0
    while start<=end:
        total=sum(total,start)
        start+=1
    return total
startNumber=int(input("Enter start:"))
endNumber=int(input("Enter end:"))
print("The sum of number between "+ str(startNumber)+" and " + str(sumFromTo(startNumber,endNumber)))