
# Note:you can use text[i].upper()

def Space(word):
    result=""
    for i in range(len(word)):
        if word[i].upper()=="C":
            result+="C"
        elif word[i].upper()=="D":
            result+="D"
        else:
            result+=word[i]
    return result
print(Space("abcd"))
