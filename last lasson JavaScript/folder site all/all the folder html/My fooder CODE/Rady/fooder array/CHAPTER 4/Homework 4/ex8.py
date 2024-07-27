# Ex8 - Object
#Reverse Object
# output: {1: 'ananab', 2: 'ognam', 3: 'tunococ'}

input = {1: 'banana', 2: 'mango', 3: 'coconut'}
for key in input:
    result = input[key]
    res=''
    for i in range(len(result)):
        res += result[-i-1]
    input[key]=res
print(input)
