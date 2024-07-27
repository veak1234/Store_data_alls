# Ex1: 
# arr = ['0', '0', 'x', '0', '0', '0', '0']

#1 - Find index of x
# def string(word):
#   count=0
#   for i in range(len(word)):
#       if word[i].lower()=="x":
#         count+=i
#   return count
# arr=eval(input("Enter Number to the array : "))
# print(string(arr))

# ------------------------------------------------------------

#2 - Replace x by 0 and replace 0 by x
# def replace(word):
#   array=[]
#   result=""
#   for i in range(len(arr)):
#       if arr[i]=="0":
#           result="x"
#       else:
#           result="0"
#       array.append(result)
#   return array
# arr=eval(input("Enter Number of arr : "))
# print(replace(arr))

# --------------------------------------------------------------------

#3 - Move x to next position
  # ['0', '0', '0', 'x', '0', '0', '0']

  
#4 - Move x to prevouis position
  # ['0', 'x', '0', '0', '0', '0', '0']

# -----------------------------------------------------------------------

# def dolpicate(value, list2):
#   isFound = True
#   for i in range(len(list2)):
#     if list2[i] == value:
#       isFound = False
#   return isFound

# list1 = input()
# list2 = ""
# for i in range(len(list1)):
#   if list1[i] != " ":
#     if dolpicate(list1[i], list2):
#       list2 += list1[i] + " "
# print(list2)