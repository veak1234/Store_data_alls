# Ex1 - String
# text = "banana"
#1 - How many letter in string
# sum=0
# for i in range(len(text)):
#     sum+=1
# print(sum)

# -----------------------------------------------------------------

#2 - How many letter "A" in string
# sum=0
# for i in range(len(text)):
#     if text[i].upper()=="A":
#         sum+=1
# print(sum)

# -------------------------------------------------------------------

#3 - Reverse string
# result=""
# for i in range(len(text)):
#     result+=text[-i+1]
# print(result)

# --------------------------------------------------------------------

#4 - Convert all letter to uppercase except letter "A"
# result=""
# for i in range(len(text)):
#     if text[i].upper()!="A":
#         result+=text[i]
# print(result.upper())

# ------------------------------------------------------------------------
# Ex2 - Array
arr = [1000, 200, 404, 500, 10]
#1 - How many degit of each item
# [4, 3, 3, 3, 2]

# array=[]
# for i in range(len(arr)):
#     result=str(arr[i])
#     count=0
#     for j in range(len(result)):
#         count+=1
#     array.append(count)
# print(array)

# ------------------------------------------------------------------------

#2 - Remove 404 from list
#3 - Reverse array
# [10, 500, 404, 200, 1000]
#4 - Sum only number with last degit is 0
# result: 1710



# Ex3 - Array
# arr = [6, 4, 3, 4]
#1 - Sum first index with last  index
# result = 10
#2 - Square all number (function)
# [36, 16, 9, 16]
#3 - Remove duplicate from list (function)
# [6, 3, 4]
#4 - create 2D array follow number in list
# [
#   [1, 2, 3, 4, 5, 6],
#   [1, 2, 3, 4]
#   [1, 2, 3],
#   [1, 2, 3, 4]
# ]



# Ex4 - Array 2D
# arr2D = [
#   [1, 2, 3],
#   [2, 3, 5],
#   [4, 5, 8],
#   [4, 3, 1]
# ]
#1 - How many row and column
# result: 4 rows 3 columns
#2 - Replace number < 3 with 9
# [
#   [9, 9, 3],
#   [9, 3, 5],
#   [4, 5, 8],
#   [4, 3, 9]
# ]
#3 - Sum row value in arr2D
# [6, 10, 17, 8]
#4 - Sum columns
# [11, 13, 17]