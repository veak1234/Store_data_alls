def removeCharacter(word,char):
    result=""
    for i in range(len(word)):
        if word[i]!=char:
            result+=word[i]
    return result
nextStep="Y"
while nextStep=="Y":
    word=input("Enter a word:")
    cherToRemove=input("Enter cherater to remove:")
    print("Result:",removeCharacter(word,cherToRemove))
    nextStep=input("Do you want to continue (Y/N)?:").upper()