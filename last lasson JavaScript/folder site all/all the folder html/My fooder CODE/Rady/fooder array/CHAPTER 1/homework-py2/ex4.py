# Ex1 - Loop

#1 - loop to display from 10 to 1 (while)
# i=1
# while i<11:
#     print(11-i)
#     i+=1

# ---------------------------------------------------------------------------

#2 - loop to display only number between 10 to 20 (while)
# i=10
# while i<21: 
#     print(i)
#     i+=1

# ---------------------------------------------------------------------------

#3 - Loop to display from 50 to 40 (while)
# i=0
# while i<=10:
#     print(50-i)  
#     i+=1  

# ==========================================================================

# Ex2 - String

# text = "125345645"
#1 - Sum all number (while)
# i=0
# sum=0
# while i < len(text):
#     sum+=int(text[i])
#     i+=1
# print(sum)

# -----------------------------------------------------------------------------

#2 - Find first index of 5 (while)
# text = "125345645"
# i=0
# isA=False
# while i < len(text) and not isA:
#     if text[i]=="5":
#         isA=True
#         print(i)
#     i+=1    

# --------------------------------------------------------------------------------
    
#3 - Find average all number (while)
# text = "125345645"
# i=0
# sum=0
# sum1=0
# while i < len(text):
#     sum+=int(text[i])
#     i+=1
#     sum1=sum / len(text)
# print(sum1)

# =============================================================================

# Ex3 - String
# text = "10 12 4 11"
#1 - Sum all number seperate by space (while)
# i=0
# result=""
# sum=0
# while i< len(text):
#     if text[i] == " " or i == len(text)-1:
#         if i ==len(text)-1:
#             result += text[i]
#         sum+=int(result)
#         result=""
#     else:
#         result+=text[i]
#     i+=1
# print(sum)

# ---------------------------------------------------------------------------

#2 - find average of that number (while)
# text = "10 12 4 11"
# i=0
# result=""
# sum=0
# sum1=0
# while i< len(text):
#     if text[i] == " " or i == len(text)-1:
#         sum1+=1
#         if i ==len(text)-1:
#             result += text[i]
#         sum+=int(result)
#         result=""
#     else:
#         result+=text[i]
#     i+=1
# print(sum/sum1)

# ------------------------------------------------------------------------------

#3 - how many number greater than 10 (while)
# text = "10 12 4 11"



# ==============================================================================

# Ex4 - Array (using while loop only)
arr = [1, 3, 5, 8, 9, 0, 5]
#1 - find index of 9
# sum=0
# for i in range(len(arr)):
#     if arr[i] == 9:
#         sum+=i
# print(sum)

# -------------------------------------------------------------------------------

#2 - find last index of 5
# sum=0
# for i in range(len(arr)):
#     if arr[i] == 5:
#         sum+=i
# print(sum)

# --------------------------------------------------------------------------------

#3 - find first index of 5
# i=0
# sum=0
# isA=False
# while i < len(arr):
#     if arr[i]==5:
#         sum+=1
#         isA=True
#     i+=1
# print(sum)

# ---------------------------------------------------------------------

#4 - sum only odd number
# sum=0
# for i in range(len(arr)):
#     if arr[i] %2 != 0:
#         sum+=arr[i]
# print(sum)

# -----------------------------------------------------------------------

#5 - remove 8 from list
# array=[]
# for i in range(len(arr)):
#     if arr[i]!=8:
#         array.append(arr[i])
# print(array)

# -------------------------------------------------------------------------

#6 - replace 0 by 33
# arr=[]

