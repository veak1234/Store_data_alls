# Ex1 - Basic array
# array = [1, 4, 5, 2, 9, 1, 6, 3, 2]

#1 - How many value in array
# print(len(array))

# =====================================================================================================

#2 - Sum all value in array
# sum=0
# for i in range(len(array)):
#     sum+=array[i]
# print(sum)

# ====================================================================================================

#3 - Count even / odd number in array
# sum=0
# for i in range(len(array)):
#     if i %2 ==0:
#         sum+=1
# print(sum)

# --------------------------------------------------------------------------------------------------------

# sum=0
# for i in range(len(array)):
#     if i %2 !=0:
#         sum+=1
# print(sum)

# ==================================================================================================

#4 - Find first index of 2
# count=0
# isFoun=False
# i=0
# while i < len(array) and not isFoun:
#     if array[i]==2:
#         count=i
#         isFoun=True
#     i+=1
# print(count)

# ====================================================================================================
   
#5 - Replace number 1 by 88 and 2 by 99
# for i in range(len(array)):
#     if array[i]==1:
#         array[i]="88"
#     if array[i]==2:
#         array[i]="99"
# print(array)

# ========================================================================================================

#6 - If value is 1 add 3 more and if value greater than 2 minus 1
# for i in range(len(array)):
#     if array[i]==1:
#         array[i]=array[i]+3
#     if array[i]>2:
#         array[i]=array[i]-1
# print(array)
