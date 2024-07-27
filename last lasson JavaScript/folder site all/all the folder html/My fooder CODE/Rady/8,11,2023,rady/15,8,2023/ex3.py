
# ----xample----
# Enter a word:abcbdb
# Enter charater to remove:b
# Result:acd

def removeCharacter(word,char):
    result=""
    for i in range(len(word)):
        if word[i]!=char.upper():
            result+=word[i]
    return result
word=input("Enter a word:")
cherToRemove=input("Enter cherater to remove:")
print("Result:",removeCharacter(word,cherToRemove))