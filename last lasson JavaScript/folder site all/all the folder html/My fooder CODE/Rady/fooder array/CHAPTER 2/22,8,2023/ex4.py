# Ex1 - String array
# text = "How are you?"

#1 - Display word by word from text
  # How
  # are
  # you?
# result=""
# for i in range(len(text)):
#   if text[i]==" ":
#     result+="\n"
#   else:
#     result+=text[i]
# print(result)

# -------------------------------------------------------------------------------------------

#2 - Create new array from text seperate by space
# ["How","are","you?"]

# array=[]
# result=""
# for i in range(len(text)):
#   if text[i]!=" ":
#     result+=text[i]
#   else:
#     array.append(result)
#     result=""
# array.append(result)
# print(array)

# result=""
# arr=[]
# for i in range(len(text)):
#     if text[i] ==" " or i == len(text)-1:
#         if i == len(text)-1:
#             result+=text[i]
#         arr.append(result)
#         result=""
#     else:
#         result+=text[i]
# print(result)
# ==================================================================================

# Ex2 - String array
# arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]

# 1 - How many banana in list
# count=0
# for i in range(len(arr)):
#   if arr[i].upper()=="BANANA":
#     count+=1
# print(count)

# ---------------------------------------------------------------------------------------

#2 - How many letter "o" in list
# result1=0
# for i in range(len(arr)):
#   result=arr[i]
#   for j in range(len(result)):
#     if result[j].upper()=="O":
#       result1+=1
# print(result1)

# -------------------------------------------------------------------------------------------

#3 - Replace banana by Jackfruit
# for i in range(len(arr)):
#   if arr[i].upper()=="BANANA":
#     arr[i]="Jackfruit"
# print(arr)

# --------------------------------------------------------------------------------------

#4 - Create new list with unique fruit
# ["banana","Apple","coconut", "mango"]

#5 - Create new list store only letter "A" and "C" from list
# result1=[]
# for i in range(len(arr)):
#   result=arr[i]
#   for j in range(len(result)):
#     if result[j].upper()=="A":
#       result1+=result[j]
#     if result[j].upper()=="C":
#       result1+=result[j]
# print(result1)

# ===============================================================================
# Ex3 - String array
# arr = ["banana","apple","mango", "Coconut"]
#1 - How many letter of each value
#   [6,5,5,7]
# sum=[]
# for i in range(len(arr)):
#   result=arr[i]
#   for j in range(len(arr)):
#     sum+=arr[j]
# print(sum)

# ==================================================================================

#2 - How many "A" letter of each value
#   [3,1,1, 0]

#3 - Move banana to last index
#4 - Reverse each value in list
#   ['ananab','elppa'...]