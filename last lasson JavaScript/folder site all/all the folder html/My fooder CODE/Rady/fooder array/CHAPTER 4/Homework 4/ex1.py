#Counter letter
# input1: ['banana','coconut','mango']
# input2: ['a','o']
# output:
# {'a': 4, 'o': 3}
def counterChar(text, value):
    counter = 0
    for v in text:
        if v.lower() == value.lower():
            counter += 1
    return counter

arr = eval(input('Enter array: '))
listOfChars = eval(input('Enter list of characters: '))
obj = {}
for ch in listOfChars:
    count = 0
    for v in arr:
       count += counterChar(v, ch)
    obj[ch] = count
print(obj)