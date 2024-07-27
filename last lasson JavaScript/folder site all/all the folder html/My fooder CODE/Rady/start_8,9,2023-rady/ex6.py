text=input()
resuld=""
isA=False
for i in range(len(text)):
    if text[0].upper()== text[i].upper() =="D" and not isA:
        resuld="Yes"
    else:
        resuld="No"
        isA=True
print(resuld)
