# Ex2 - String
# text = "Welcome to Phnom Penh"

# 1 - how amny letter in string
# sum=0
# for i in range(len(text)):
#     if text[i]!=' ':
#         sum+=1
# print(sum)

# ---------------------------------------------------

#2 - Reverse string
# cound=""
# for i in range(len(text)):
#     if text[i]!=' ':
#         cound+=text[-i-1]
# print(cound)



# -------------------------------------------------------

#3 - add string to arr : ['welcome', 'to', 'phnom', 'penh']
# text = "Welcome to Phnom Penh"
# arr=[]
# result=''

# for i in  range(len(text)):
#     if text[i].lower()!=" ":
#         result+=text[i]
#     else:
#         arr.append(result)
#         result=''
#     if(len(text)-1 == i):
#         arr.append(result)
# print(arr)