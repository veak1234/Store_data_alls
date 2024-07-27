# Ex10
# From list of array 2D
# numbers = [
#   [1,3,4, 4],
#   [3, 4, 0, 4]
#   [5, 6, 9, 0]
#   [4, 5, 9, 7]
# ]
#1 - How many number 4 from array 2D (function)
def sumOfnumber(word):
    sum=0
    for i in range(len(word)):
        result=word[i]
        for j in range(len(result)):
            if result[j]== 4:
                sum+=1
    return sum
numbers= [
  [1,3,4, 4],
  [3, 4, 0, 4],
  [5, 6, 9, 0],
  [4, 5, 9, 4],
]            
print("  number 4 from array 2D = " + str(sumOfnumber(numbers)))

# ----------------------------------------------------------------------------------

#2 - Sum each list of array in array 2D (function)
# output: [12, 11, 20, 25]

# def sumOfnumberAll(word):
#     arr=[]
#     for i in range(len(word)):
#         sum=0
#         for j in range(len(word[i])):
#             sum+=word[i][j]
#         arr.append(sum)
#     return arr
# numbers= [
#   [1,3,4, 4],
#   [3, 4, 0, 4],
#   [5, 6, 9, 0],
#   [4, 5, 9, 4],
# ] 
# print(sumOfnumberAll(numbers))

# -------------------------------------------------------------

#3 - Sum only number 4 in list 

# def sumOfnumber(word):
#     sum=0
#     for i in range(len(word)):
#         result=word[i]
#         for j in range(len(result)):
#             if result[j] == 4:
#                 sum+=result[j]
#     return sum
# numbers= [
#   [1,3,4, 4],
#   [3, 4, 0, 4],
#   [5, 6, 9, 0],
#   [4, 5, 9, 4],
# ] 
# print(sumOfnumber(numbers))

# ----------------------------------------

#4 - Replace number 0 with 99 (function)





#5 - where find index of 7 in list 
# output: [3][3]

# numbers= [
#   [1,3,4, 4],
#   [3, 4, 0, 4],
#   [5, 6, 9, 0],
#   [4, 5, 9, 4],
# ]    
# for i in range(len(numbers)):
#     count=numbers[i]
#     for j in range(len(count)):
        
#         print(count[j])


