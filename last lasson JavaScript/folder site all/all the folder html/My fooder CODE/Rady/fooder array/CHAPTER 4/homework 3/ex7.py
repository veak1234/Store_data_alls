
# Ex7 - Array
# Array to object - counting character
# input: ['banana','coconut', 'mango', 'orange']
# output: 
# [
#   {'banana':6,'coconut':7,'mango': 5,'orange': 6}
# ]

def counterChar(text):
    counter = 0
    for i in range(len(text)):
        counter += 1
    return counter
arr = ['banana','coconut', 'mango', 'orange']
array=[]
object={}
for i in range(len(arr)):
    result=arr[i]
    object[result]=counterChar(result)
array.append(object)
print(array)

