# Ex1 - basic 1
# arr = ["banana","apple"]

#1 - How many "a" or "A" in list
# result1=0
# for i in range(len(arr)):
#     result=arr[i]
#     for j in range(len(result)):
#         if result[j].upper()=="A":
#             result1+=1
# print(result1)

# -----------------------------------------------------------------------------

#2 - Create new array store letter difference from A
#   Output: ["b", "n", "n", "p", "p", "l", "e"]
# result1=[]
# for i in range(len(arr)):
#     result=arr[i]
#     for j in range(len(result)):
#         result1.append(result[j])
# print(result1)
    
#=================================================================================
# Ex2 - basic 2
# arr = [2, 3, 4, 3, 2, 5, 3, 2, 5]

#1 - Square odd number in list
# for i in range(len(arr)):
#     if arr[i] %2 !=0:
#         arr[i]=arr[i]*arr[i]
# print(arr)

# --------------------------------------------------------------------------------

#2 - Filter list with dupplicate value
#    output: [2, 3, 4, 5]

def checkValue(value,array):
    isUnique=True
    for i in range(len(array)):
        if array[i]==value:
            isUnique=False
    return isUnique
arr=[2,3,4,3,2,5,3,2,5]
newArray=[]
for i in range(len(arr)):
    if checkValue(arr[i],newArray):
        newArray.append(arr[i])
print(newArray)

#=================================================================================
# Ex3 - basic 3
# arr = [1, 0, 0, 1, 0]

#1 - Replace 0 with x
# for i in range(len(arr)):
#     if int(arr[i])==0:
#         arr[i]="X"
# print(arr)

# ---------------------------------------------------------------------------------

#2 - Move 0 before 1
#   Output: [0, 0, 0, 1, 1]
# arr1=[]
# arr2=[]
# for i in range(len(arr)):
#     if arr[i]== 0:
#         arr1.append(arr[i])
#     else:
#         arr2.append(arr[i])
# print(arr1+arr2)

# =====================================================================================

