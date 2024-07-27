# arr = ["Navy","Za","Da","Borey"]
# array = ["v","o"]
# object={}
# for i in range(len(array)):
#     res=array[i]
#     cound=0
#     for j in range(len(arr)):
#         result=arr[j]
#         for k in range(len(result)):
#             if result[k]==res:
#                 cound+=1
#     object[res]=cound
# print(object)


def word(arr, value):
    count = 0
    for i in range(len(arr)):
        if arr[i].upper() == value.upper():
            count += 1
    return count
arr=['Navy', 'Za', 'Da', 'Borey']
arr2=['a', 'o']
object = {}
for i in range(len(arr2)):
    sum = 0
    for j in range(len(arr)):
        sum += word(arr[j], arr2[i])
    object[arr2[i]]=sum
print(object)



