
def containUpperCase(word):
    result=""
    for i in range(len(word)):
        if word[i].upper()!="H" and word[i].upper()!="I":
            result="True"
        else:
            result="False"
    return result
word=input("Enter : ")
print(containUpperCase(word))