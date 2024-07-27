text=input()
resuld=""
for i in range(len(text)):
    if int(text[i])>20:
        resuld="WON"
    elif int(text[i])<20:
        resuld="LOST"
print(resuld)