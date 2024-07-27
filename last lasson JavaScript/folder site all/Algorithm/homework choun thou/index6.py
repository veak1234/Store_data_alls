

# arr=[12,34,10,34,12]
# sum=0
# for i in range(len(arr)):
#     if arr[i] % 2 ==0:
#         sum+=arr[i]
# print(sum)

# ///////////////////


# def changeRady(word):
#     for i in range(len(word)):
#         if str(word[i])[-1] == '2' :
#             arr[i]='rady'
#     return arr
# arr=[12,30,22,34,12]
# print(changeRady(arr))

# /////////////////////

# number='368732Heybro'
# result=len(number)-1
# result1=""
# for i in range(len(number)):
#     result1+=number[result-i]
# print(result1)
    
# ///////////////////////

# number='368732Heybro'
# cound=0
# for i in range(len(number)):
#     if number[i].isnumeric():
#         cound+=1
# print(cound)

# ////////////////////////

# number='368732Heybro'
# cound=0
# for i in range(len(number)):
#     if number[i].isnumeric():
#         cound+=int(number[i])
# print(cound)

# ///////////////////////

number='368732Heybro'
isGirl = False
for i in range(len(number)-1):
    if number[i]+number[i+1] == '32':
        isGirl = True
if isGirl:
    print('Hello baby')
else:
    print('sad')
