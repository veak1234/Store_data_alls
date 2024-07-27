# Ex2 - Array 2D
arr2D = [
  [1, 2, 3],
  [3, 5, 9],
  [8, 4, 3]
]
#1 - Sum each array
# [6, 17, 15]
# arr=[]
# for i in range(len(arr2D)):
#     result=arr2D[i]
#     sum=0
#     for j in range(len(result)):
#         sum+=result[j]
#     arr.append(sum)
# print(arr)

# ------------------------------------------------------

#2 - Select only odd number
# [1, 3, 3, 5, 9, 3]

# arr=[]
# for i in range(len(arr2D)):
#     result=arr2D[i]
#     for j in range(len(result)):
#         if result[j] %2 !=0:
#             arr.append(result[j])
# print(arr)
        

# ----------------------------------------------------------

#3 - Replace all even number with 168
# [
#   [168, 2, 168],
#   [168, 168, 168],
#   [8, 4, 168]
# ]
# arr=[]
# for i in range(len(arr2D)):
#     result=arr2D[i]
#     array=[]
#     for j in range(len(result)):
#         if result[j] %2 !=0:
#             array.append(168)
#         else:
#             array.append(result[j])
#     arr.append(array)
# print(arr)
