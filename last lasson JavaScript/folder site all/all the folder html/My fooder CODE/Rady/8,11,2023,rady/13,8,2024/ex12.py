
# text=input()
# resuld=0
# for i in range(len(text)):
#     if text[i].isupper():
#         resuld+=1
# print(resuld)

def numberofuppercases(word):
    resuld=0
    for i in range(len(word)):
        if word[i].isupper():
            resuld+=1
    return resuld
word=input("word:")
print("Number of uppercase letters: " + str(numberofuppercases(word)))


