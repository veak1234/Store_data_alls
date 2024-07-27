
# Ex6 - Array
# Array to object

# output: 
# [
#   {0: 'banana',1: 'coconut',2: 'mango',3: 'orange'}
# ]
def countNumber(input):
    array=[]
    object={}
    for i in range(len(input)):
        res=i
        object[res]=input[i]
    array.append(object)
    return array
input= ['banana','coconut', 'mango', 'orange']
print(countNumber(input))
