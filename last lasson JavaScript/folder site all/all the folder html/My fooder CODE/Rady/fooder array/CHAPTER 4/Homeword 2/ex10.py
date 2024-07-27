# Ex2 - Array
# arr = [1010, 55, 993, 2]
#1 - How many degit of each number
# [4, 2, 3, 1]

def string(word):
    array=[]
    for i in range(len(word)):
        mystring = str(word[i])
        array.append(len(mystring))
    return array
arr= eval(input("Enter: "))
print(string(arr))

# --------------------------------------

#2 - Reverse arra
# expected resutl [2, 993, 55, 1010]
# def reverse(word):
#     array=[]
#     result=''
#     for i in range(len(arr)):
#         result=str(arr[-i-1])
#         array.append(result)
#     return array
# arr = [1010, 55, 993, 2]
# print(reverse(arr))

# ----------------------------------------------

#3 - Sum only number > 2 degit
# def sum(word):
#     sum=0
#     result=''
#     for i in range(len(word)):
#         result=str(word[i])
#         if len(result)>2:
#             sum+=int(result)
#     return sum
# arr = [1010, 55, 993, 2]
# print(sum(arr))