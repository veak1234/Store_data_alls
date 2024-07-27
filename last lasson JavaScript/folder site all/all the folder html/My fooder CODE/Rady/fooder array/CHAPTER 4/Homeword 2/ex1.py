# Ex1 - String
numberInString = "10 30 4 12"
#1 - How many number in string
# sum=0
# for i in range(len(numberInString)):
#     if numberInString[i]!=' ':
#         sum+=1
# print(sum)

# --------------------------------------------------------

#2 - Sum all value seperated by space 
# number=""
# sum=0
# for i in range(len(numberInString)):
#     if numberInString[i]==" " or i == len(numberInString)-1:
#         if i == len(numberInString)-1:
#             number+=numberInString[i]
#         sum+=int(number)
#         number=""
#     else:
#         number+=numberInString[i]
# print(sum)

# ----------------------------------------------------------------

#3 - Find average of number
number=""
sum=0
count=0
for i in range(len(numberInString)):
    if numberInString[i]==" " or i == len(numberInString)-1:
        count+=1
        if i == len(numberInString)-1:
            number+=numberInString[i]
        sum+=int(number)
        number=""
    else:
        number+=numberInString[i]
print(count)
print(sum,"/",count)
print("= ",sum/count)

