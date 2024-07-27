# Ex4 - Array string

# arr = ['rady','ronan','him','yon','mengheang']
#1 - How many letter "A" and "O" in list
# sum=0
# sum1=0
# for i in range(len(arr)):
#     res=arr[i]
#     for j in range(len(res)):
#         if res[j].lower()=="a":
#             result1=res[j]
#             sum+=1
#         elif res[j].lower()=="o":
#             result=res[j]
#             sum1+=1
# print(str(result1),"=",sum, " and ",str(result),"=", sum1)

# -------------------------------------------------------------------

#2 - Reverse array
# arr = ['rady','ronan','him','yon','mengheang']
# array=[]
# result=''
# for i in range(len(arr)):
#     res=arr[i]
#     for j in range(len(res)):
#         result+=res[-j-1]
#     array.append(result)
#     result=''
# print(array)

# -------------------------------------------------------------------

#3 - Reverse text in array
# arr = ['rady','ronan','him','yon','mengheang']
# array=[]
# cound=''
# for i in range(len(arr)):
#     cound+=arr[-i-1]
#     array.append(cound)
#     cound=''
# print(array)

# ---------------------------------------------------------------------

#4 - count letter in array: [4, 4, 3, 3, 9]
# arr = ['rady','ronan','him','yon','mengheang']
# array=[]
# sum=0
# for i in range(len(arr)):
#     res=arr[i]
#     for j in range(len(res)):
#         sum+=1
#     array.append(sum)
#     sum=0 
# print(array)

# -------------------------------------------------------------------------

#5 - create array 2D with string in list
# [['r','a','d','y'],....]

arr = ['rady','ronan','him','yon','mengheang']
array=[]
array2D=[]
for i in range(len(arr)):
    res=arr[i]
    for j in range(len(res)):
        array.append(res[j])
    array2D.append(array)
    array=[]
print(array2D)