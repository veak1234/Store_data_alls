text=input()
isbig=int(text[0])
for i in range(len(text)):
    if int(text[i])>isbig:
        isbig=int(text[i])
print(isbig)
