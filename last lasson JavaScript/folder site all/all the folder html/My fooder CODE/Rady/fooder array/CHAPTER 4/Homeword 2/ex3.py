# Ex3 - Array number
# arr = [10, 3, 4, 8, 9, 4, 5, 3, 5]
#1 - Reverse array
# array=[]
# result=''
# for i in range(len(arr)):
#     result=str(arr[-i-1])
#     array.append(result)
# print(array)
    
# ---------------------------------------------

#2 - Remove duplicate value
# arr = [10, 3, 4, 8, 9, 4, 5, 3, 5]

# ------------------------------------------------

#3 - replace numebr > 3 with 0
# def replace(arr):
#     for i in range(len(arr)):
#         if arr[i]>3:
#             arr[i]=0
#     return arr
# arr = [10, 3, 4, 8, 9, 4, 5, 3, 5]
# print(replace(arr))

# ---------------------------------------------------

#4 - Find average of odd number
# def sumNumber(arr):
#     sum=0
#     for i in range(len(arr)):
#         if arr[i] % 2!= 0:
#             sum+=arr[i]
#     return sum /len(arr)
# arr = [10, 3, 4, 8, 9, 4, 5, 3, 5]        
# print(sumNumber(arr))

# -----------------------------------------------------

#6 - remove number 8, 9, 10
def remvoeNumber(arr):
    array=[]
    for i in range(len(arr)):
        if arr[i] < 8:
            array.append(arr[i])
    return array
arr = [10, 3, 4, 8, 9, 4, 5, 3, 5]        
print(remvoeNumber(arr))