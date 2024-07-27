
arr=eval(input())
array=[]
for i in range(len(arr)):
    res=arr[i]
    result=''
    for j in range(len(res)):
        if res[j].lower()=='e':
            result=res
    array.append(result)
print(array)
