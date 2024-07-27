# Ex5 - Array
#Reverse text by index
# output=
# ['ananab','coconut','ognam']

def reverse(arr,index):
    res=arr[index]
    word=''
    for i in range(len(res)):
        word+=res[-i-1]
    return word
arr=['banana', 'coconut', 'mango']
findeIndex=[0,2]
for i in range(len(findeIndex)):
    res=reverse(arr,findeIndex[i])
    arr[findeIndex[i]]=res
print(arr)
