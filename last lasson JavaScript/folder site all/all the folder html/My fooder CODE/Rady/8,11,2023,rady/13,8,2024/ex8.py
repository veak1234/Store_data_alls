

def removMinuses(word):
    resuld=""
    for i in range(len(word)):
        if word[i]!="-":
            resuld+=word[i]
    return resuld
isA=True
while isA:
    text=input("Enter a word:")
    print("word without minus: " + removMinuses(text))
    question=input("do you want to continue(y/n):")
    if question.upper()=="N":
        isA=False
        