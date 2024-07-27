
# def isA(arr):
#     arr1=[]
#     for i in range(len(arr)):
#         if arr[i]!=7:
#             arr1.append(arr[i])
#     return arr1
# arr=eval(input())
# print(isA(arr))

# =======================================================

arr1=[4,2,3,4,5,6]
arr2=[4,2,3]
sum1=0
sum=0
for i in range(len(arr1)):
    sum+=arr1[i]
for i in range(len(arr2)):
    sum1+=arr2[i]
print(sum,sum1)