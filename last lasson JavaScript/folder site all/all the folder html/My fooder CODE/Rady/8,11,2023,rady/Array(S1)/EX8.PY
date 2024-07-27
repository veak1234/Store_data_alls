
def contains(word,character):
    result=""
    for i in range(len(word)):
        if word[i]==character:
            result="VALID"
        else:
            result="NOT VALID"
    return result
word=input()
character=input()        
print(contains(word,character))
