# arr1=['pnc','pnv','pnp']
# arr2=['2023','2023','2022']
# array=[]
# for i in range(len(arr1)):
#     array.append(arr1[i])
#     for j in range(len(arr2)):
#         array.append(arr2[i])
# print(array)

# -----------------------------------------------------------

# def string(word):
#     count=0
#     for i in range(len(word)):
#         if word[i]=="X":
#             count+=i
#     return count
# arr=["A","X","A","A","X"]            
# print(string(arr))


# arr2D = [
#   [1, 2, 3],
#   [3, 5, 9],
#   [8, 4, 3],
#   [2, 3, 1],
#   [2, 5, 1],
# ]
# column = len(arr2D[0])
# row = len(arr2D)
# for i in range(column):
#     cound=0
#     for j in range(row):
#         cound+=arr2D[j][i]
# print(cound)

# def reverse(text):
#     result=""
#     for i in range(len(text)):
#         result+=text[-i-1]
#     return result
# string="1232445hello"    
# print(reverse(string))

# -------------------------------------------------------

# def string(word):
#     array=[]
#     for i in range(len(word)):
#         result=word[i]
#         sum=0
#         for j in range(len(result)):
#             sum+=result[j]
#         array.append(sum)
#     return array
# arr=eval(input())  
# print(string(arr))

# -----------------------------------------------

# def string(word):
#     array=[]
#     for i in range(len(word)):
#         count=0
#         for j in range(len(word[i])):
#             count+=arr[j][i]
#         array.append(count)
#     return array
# arr=eval(input())  
# print(string(arr))


# def sumColumn(arr2D,Index):
#     sum = 0
#     for i in range(len(arr2D)):
#         sum += arr2D[i][Index]
#     return sum

# arr2D = eval(input())
# arr  = []
# for i in range(len(arr2D[0])):
#     arr.append(sumColumn(arr2D,i))
# print(arr)

# --------------------------------------------------------------------------

# arr1=[4,3,5,6,2]
# arr2=[4,3]
# sum=0
# sum1=0
# for i in range(len(arr1)):
#     sum+=arr1[i]
# for j in range(len(arr2)):
#     sum1+=arr2[j]
# print(sum,sum1)


# ----------------------------------------------------------------------------

# for i in range(2):
#     sum=0
#     arr=eval(input())
#     for i in range(len(arr)):
#         sum+=arr[i]
#     print(sum)

# -------------------------------------------------------------------------------
# ================================================================================

# Ex1:
# number of array: 3
# > [3, 3]
# > [1, 3, 4]
# > [4, 5, 9, 1]

# output:
# 6
# 8
# 19

# def sum(array):
#     total=0
#     for i in range(len(array)):
#         total+=array[i]
#         return total
# numberOfArrays=int(input())
# for i in range(numberOfArrays):
#     arr=eval(input())
#     print(sum(arr))


# ———————————————------------------------------------------------------
# Ex2:
# number of array: 2
# > [3, 2]
# > [1, 3, 4]

# output:
# [2, 3]
# [4, 3, 1]

# def reverseArray(array):
#     lastIndex=len(array)-1
#     newlist=[]
#     for i in range(len(array)):
#         newlist.append(array[lastIndex-i])
#     return newlist
# numberOfArrays=int(input())
# for i in range(numberOfArrays):
#     arr=eval(input())
#     print(reverseArray(arr))


# =-------------------------------------------------------