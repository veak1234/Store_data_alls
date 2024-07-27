

def reverseString(word):
    result=""
    for i in range(len(word)):
        if word[i].upper()!="H+I":
            result+=word[-i-1]
        else:
            result+=word[i]
    return result
text=input("Enter : ")   
print(reverseString(text))
