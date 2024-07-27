# ex1
# text = "what is your name?"
# output: ['what', 'is', 'your', 'name?']
# arr=[]
# result=""
# for i in range(len(text)):
#     if text[i]!=" ":
#         result+=text[i]
# print(result)

# ex2
# output: [5, 6, 6]
arr = ['apple', 'banana', 'my love']
array=[]
for i in range(len(arr)):
    result=arr[i]
    count=0
    isA=False
    for j in range(len(result)):
        if result[j]==' ':
            isA=True
        else:
            count+=1
    array.append(count)
print(array)



# output: [5, 6, 7]
# arr = ['apple', 'banana', 'my love']
# array=[]
# for i in range(len(arr)):
#     result=arr[i]
#     count=0
#     for j in range(len(result)):
#         count+=1
#     array.append(count)
# print(array)