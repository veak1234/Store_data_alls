def findA(string):
    countA=0
    for i in range(len(string)):
        if string[i].upper()=="A":
            countA+=string[i]
    return countA
text=input()
print(findA(text))