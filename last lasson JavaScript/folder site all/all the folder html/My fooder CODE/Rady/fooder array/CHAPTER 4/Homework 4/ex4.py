# Ex4 - Array
#Get value by index

# output:
# {0: 'banana', 2: 'mango'}
def countNumber(input1,input2):
    object={}
    result=""
    for i in range(len(input2)):
        res=input2[i]
        for j in range(len(input1)):
            if res==j:
                result=input1[j]
            object[res]=result
    return object
input1= ['banana','coconut','mango']
input2= [0, 2]            
print(countNumber(input1,input2))

