# Ex3 - Array
#Find index
# ouput: {3: [0, 1], 4: 2, 6:[4, 5]}

def findIndex(input1,input2):
    object={}
    for i in range(len(input2)):
        res=input2[i]
        arr=[]
        for j in range(len(input1)):
            if res==input1[j]:
                arr.append(j)
        object[res]=arr
    return object
input1= [3, 3, 4, 5, 6, 6]
input2= [3, 4, 6]
print("Find of index = ",findIndex(input1,input2))


