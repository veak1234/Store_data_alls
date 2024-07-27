
# Ex2 - Array
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]

#1 - Sum all number (function)
# def sumAllNumber(array):
#     count=0
#     for i in range(len(array)):
#         count+=array[i]
#     return count
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]
# print(sumAllNumber(arr))

# ----------------------------------------------

#2 - Reverse array (function)
# def resverse(array):
#     array=[]
#     count=len(arr)-1
#     for i in range(len(arr)):
#         array.append(arr[count-i])
#     return array
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]
# print(resverse(arr))

# ---------------------------------------------------------

#3 - Find index of 3 (function)
# def findIndex(array,number):
#     res=None
#     for i in range(len(array)):
#         if array[i]==number:
#             res=i
#     return res
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]
# arr.pop(findIndex(arr,3))
# print(arr)

# -------------------------------------------------------------

#4 - Romove 8 number from list (function)
# def findIndex(array,number):
#     res=None
#     for i in range(len(array)):
#         if array[i]==number:
#             res=i
#     return res
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]
# arr.pop(findIndex(arr,8))
# print(arr)

# -----------------------------------------------------------------

#5 - Remove duplicate value (function)
# def removeDuplicate(array,value):
#     arr=[]
#     for i in range(len(array)):
#         if array[i]==value:
#             arr.append(array[i])
#     return arr
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]  
# print(removeDuplicate(arr))         



#6 - Replace 10 by 99
def replace(array):
    for i in range(len(array)):
        if array[i] == 10:
            array[i] = 99
    return array
arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]
print(replace(arr))

# -------------------------------