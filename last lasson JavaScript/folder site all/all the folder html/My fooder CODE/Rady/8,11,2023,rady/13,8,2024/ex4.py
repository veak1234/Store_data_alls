# number big

def findMax(string):
    max=string[0]
    for i in range(len(string)):
        if max < string[i]:
            max=string[i]
    return max
string=input()
print(findMax(string))
