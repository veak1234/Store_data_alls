
# Ex2 - Array
# String to array seperate by space
# Input: aba bank in Cambodia
# output: ['aba', 'bank','in','Cambodia']

text="aba bank in Cambodia"
arr=[]
result=""
for i in range(len(text)):
    if text[i]==" " or i == len(text)-1:
        if i==len(text)-1:
            result+=text[i]
        arr.append(result)
        result=""
    else:
        result+=text[i]
print(arr)

