text=input()
resuld=""
isA=False
for i in range(len(text)):
    if text[i]=="#":
        isA=True
    elif isA:
        for j in range(4):
            resuld+=text[i]
        isA=True
    else:
        resuld+=text[i]
if len(resuld)>0:
    print(resuld)
else:
    print("No letter")            
    