
# 2.Count avoid Spaces in string length
# input:ab1 dc a
# output:6

def number(word):
    sum=0
    for i in range(len(word)):
        if word[i]!=" ":
            sum+=1
    return sum
print(number("ab1 dc a"))
