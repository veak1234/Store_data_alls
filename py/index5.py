# arr = ['Dana','kaka','rady','hey you I love you']
# cound=0
# for i in range(len(arr)):
#     res=arr[i]
#     for j in range(len(res)):
#         if res[j]!=' ':
#             cound+=1
# print(" cound ",cound)

# ///////////////////////

# arr = ['Dana','kaka','rady','hey you I love you']
# cound=0
# for i in range(len(arr)):
#     res=arr[i]
#     for j in range(len(res)):
#         if res[j].lower()=="a":
#             cound+=1
# print(cound)

# //////////////////////////

# arr = ['Dana','kaka','rady','hey you I love you']
# cound=0
# for i in range(len(arr)):
#     if arr[i]=='rady':
#         cound=i
# print(cound)

# //////////////////////////////

def indexRa(arr1):
    index=None
    for i in range(len(arr1)):
        if arr1[i] == 'rady':
            index = i
    return index
arr = ['Dana','kaka','rady','hey you I love you']  
isFound =True
while isFound:
    text=input()
    result= indexRa(arr)
    if (text == 'D' or text == 'd') and result < len(arr) -1:
        arr[result] = arr[result+1]
        arr[result+1] = 'rady'
    elif (text == 'A' or text == 'a') and result > 0:
        arr[result] = arr[result-1]
        arr[result-1] = 'rady'      
    elif text=='stop':
        isFound=False
    if isFound:
        print(arr)
if not isFound:
    print('Thank you ')
