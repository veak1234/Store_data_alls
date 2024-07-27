# Ex6 - object
# [
#   {0:'b',1:'a', 2:'n', 3: 'a', 4: 'n',5:'a'},
#   {0:'m',1:'a', 2:'n', 3: 'g', 4: 'o'},
# ]

input1= ['banana','coconut','mango']
input2= [0,2]
object={}
array=[]
for i in range(len(input2)):
    res=input2[i]
    for j in range(len(input1)):
        if res==j:
            counld=input1[j]
            for k in range(len(counld)):
                index=k
                object[index]=counld[k]
    array.append(object)
    object={}
print(array)
