# Ex3 - Array 2D
#1 - How many number 2 in list

# def sumNumber(array2D):
#     count=0
#     for i in range(len(array2D)):
#         result=array2D[i]
#         for j in range(len(result)):
#             if result[j]==2:
#               count+=1
#     return count
# arr = [
#   [1, 2, 3],
#   [2, 3, 4],
#   [5, 6, 8],
#   [10, 2, 8]
# ]
# print(sumNumber(arr))

# -------------------------------------------------------

#2 - Sum only number > 5
# def sumnumber(word):
#     sum=0
#     for i in range(len(word)):
#         result=word[i]
#         for i in range(len(result)):
#             if result[i] > 5:
#                 sum+=result[i]
#     return sum
# arr = [
#   [1, 2, 3],
#   [2, 3, 4],
#   [5, 6, 8],
#   [10, 3, 8]
# ]
# print(sumnumber(arr))
        
# -------------------------------------------------------

#3 - How many number < 5
# def sumnumber(word):
#     sum=0
#     for i in range(len(word)):
#         result=word[i]
#         for i in range(len(result)):
#             if result[i] < 5:
#                 sum+=result[i]
#     return sum
# arr = [
#   [1, 2, 3],
#   [2, 3, 4],
#   [5, 6, 8],
#   [10, 3, 8]
# ]
# print(sumnumber(arr))

# -----------------------------------------------------

#4 - Sum number in row
# arr = [
#   [1, 2, 3],
#   [2, 3, 4],
#   [5, 6, 8],
#   [10, 3, 8]
# ]
# sum = 0
# for i in range(len(arr)):
#     resuld = arr[i]
#     for j in range(len(resuld)):
#         sum += resuld[j]
# print(sum)   

# //////////////////////////////////

#5 - Sum number in column


#6 - Replace number 8 with *

arr = [
  [8, 2, 3],
  [2, 3, 4],
  [5, 6, 8],
  [10, 3, 8]
]
for i in range(len(arr)):
    consol = arr[i]
    for j in range(len(consol)):
        if consol[j] == 8:
            consol[j] = '*'
print(arr)

# -------------------------------