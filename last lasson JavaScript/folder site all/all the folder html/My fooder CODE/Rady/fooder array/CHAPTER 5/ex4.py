# arr=[6,4,3,4]
# sum=0
# for i in range(len(arr)):
#     sum=arr[0]+arr[-1]
# print(sum)

# -----------------------------------------------

# def sumNumber(n):
#     return n*n
# arr=[6,4,3,4]
# for i in range(len(arr)):
#     arr[i]=sumNumber(arr[i])
# print(arr)

# ---------------------------------------------

# def sumNumber(value,arr):
#     isA=False
#     for i in range(len(arr)):
#         if value==arr[i]:
#             isA=True
#     return isA
# arr=[6,4,3,4]
# array=[]
# for i in range(len(arr)):
#     if not sumNumber(arr[i],array):
#         array.append(arr[i])
# print(array)

# ----------------------------------------------------------
# arr=["mango","orange"]
# array=[]
# for i in range(len(arr)):
#     array.append(arr[len(arr)-(i+1)])
# print(array)


# arr=["mango","orange"]
# array=[]
# result1=""
# for i in range(len(arr)):
#     result=arr[-i-1]
#     for j in range(len(result)):
#         result1+=result[-j-1]
#     array.append(result1)
#     result1=""
# print(array)

# -----------------------------------------------------------------

# count=0
# N=int(input())
# for i in range(N):
#     text=input()
#     for j in range(len(text)):
#         if text[j].lower()=="a":
#             count+=1
# print(count)

# ------------------------------------------------------------------


# def sumNumber(word):
#     sum=0
#     for i in range(len(word)):
#         result=word[i]
#         for j in range(len(result)):
#             if result[j] % 2==0:
#                 sum+=result[j]
#     return sum
# arr2D=[
#     [2,4,5],
#     [1,3,6],
#     [5,3,2],
# ]                
# print(sumNumber(arr2D))

# -------------------------------------------------------------------

# arr=["coconut","banana","orange"]
# cound=""
# for i in range(len(arr)):
#     result=arr[i]
#     for j in range(len(result)):
#         if result[j].lower()=='a':
#             cound+=result[j]
# print("output : ",cound)


# arr=["coconut","banana","orange"]
# cound=0
# for i in range(len(arr)):
#     result=arr[i]
#     for j in range(len(result)):
#         if result[j].lower()=='a':
#             cound+=1
# print("Number : ",cound)


# ----------------------------------------------------------------------

# def cuondNumber(arr,array):
#     arr2D=[]
#     for i in range(len(array)):
#         res=array[i]
#         cound=0
#         for j in range(len(arr)):
#             resuld=arr[j]
#             for k in range(len(resuld)):
#                 if resuld[k].lower()==res:
#                     cound+=1
#         arr2D.append(str(res)+" = "+str(cound))  
#     return arr2D
# arr=["coconut","banana","orange"]
# array=["c","n"]      
# print(cuondNumber(arr,array))


# -------------------------------------------------------------------------

# arr=[1,2,3,4,5,6,7] 
# sum=0
# text=input()  
# if text=='even':
#     for i in range(len(arr)):
#         if arr[i] % 2==0:
#             sum+=arr[i]
# elif text=='odd':
#     for j in range(len(arr)):
#         if arr[j] % 2!= 0:
#             sum+=arr[j]         
# print(sum)


# def textNumber(text,arr):
#     sum=0
#     if text=='even':
#         for i in range(len(arr)):
#             if arr[i] % 2==0:
#                 sum+=arr[i]
#     elif text=='odd':
#         for j in range(len(arr)):
#             if arr[j] % 2!= 0:
#                 sum+=arr[j]
#     return sum
# arr=[1,2,3,4,5,6,7] 
# text=input()           
# print(textNumber(text,arr))

# ------------------------------------------------------------

# arr=[
#     {'id':1,'name':'Nara','money':200},
#     {'id':2,'name':'ta','money':300},
#     {'id':3,'name':'Navy','money':400},
#     {'id':4,'name':'oun-za','money':500},
# ]

# for countd in arr:
#     for key in countd:
#         if countd['name']=='Navy':
#             count=countd['money']
# print(count)

# ----------------------------------------------------
# def sumNumber(arr):
#     sum=0
#     for cound in arr:
#         for key in cound:
#             sum+=cound['money']
#     return sum /len(cound)
# print(sumNumber(arr))

# ---------------------------------------------------------
# for key in arr:
#     res=key['name']
#     for i in res:
#         if i.lower()=='n':
#             key['money']=1000
#     print(key)

# ------------------------------------------------------------

array=[
    {'name':'apple','price':200},
    {'name':'orange','price':300},
    {'name':'mango','price':100},
]
arr=['a','o','p']

# sum=0
# for key in array:
#     res=key['name']
#     for i in res:
#         sum+=1
# print(sum)

# ---------------------------------------------------------------

# array2D=[]
# res=''
# for key in array:
#     res=key['name']
#     array2D.append(res)
# print(array2D)

# -------------------------------------------------------------------
# sum=0
# object={}
# for i in range(len(arr)):
#     result=arr[i]
#     for key in array:
#         res=key['name']
#         for j in res:
#             if result==j:
#                 sum+=1
#     object[result]=sum
#     sum=0
# print(object)

# ---------------------------------------------------------------------

def check(arr, value):
    return True
def count(text, key):
    sum = 0
    for i in range(len(text)):
        for j in range(len(text[i])):
            if text[i][j] == key:
                sum += 1
    return sum
    
numberOfletter = {}
arr = []
input = ['banana', 'coconut']
for i in range(len(input)):
    for j in range(len(input[i])):
        if check(arr, input[i][j]):
            res = input[i][j]
            numberOfletter[res] = count(input, res)
print(numberOfletter)
