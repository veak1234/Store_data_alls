
# Ex3 - Array
# Get only text contains letter A
# Input: ['banana','coconut','mango']
# output: ['banana','mango']

def checkA(word):
    isFound=False
    i=0
    while i<len(word) and not isFound:
        if word[i].lower()=='a':
            isFound=True
        i+=1
    return isFound
arr=['banana','coconut','mango']
newArr=[]
for value in arr:
    if checkA(value):
        newArr.append(value)
print(newArr)
