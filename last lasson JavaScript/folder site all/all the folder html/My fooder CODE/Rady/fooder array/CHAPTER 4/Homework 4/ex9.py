# Ex9 - Array
#Replace character by something
# output:
# ['b*n*n*','coconut','m*ngo']

input1= ['banana','coconut','mango']
input2= ['a', '*']
newarr = []
for i in range(len(input1)):
    res=input1[i]
    string = ''
    for j in range(len(res)):
        if res[j] == input2[0]:
            string += "*"
        else: 
            string += res[j]
    newarr.append(string)
print(newarr)