# 6.	The program asks user to enter the number of values: 
# Number of values: 3
# 7.	Then the program asks user to enter each values one by one: 
# Value 1: 10
# Value 2: 5
# Value 3: 2
# 8.	The program will print the sum of all numbers
# The sum is: 17

def sum(n1,n2):
    return n1+n2
numberofTimes=int (input("Number of times"))
result=0
for i in range(numberofTimes):
    number= int (input("Value" + str(i+1) +": "))
    if i==0:
        prevuisvalue=number
    else:
        result= sum(prevuisvalue, number)
print(result)