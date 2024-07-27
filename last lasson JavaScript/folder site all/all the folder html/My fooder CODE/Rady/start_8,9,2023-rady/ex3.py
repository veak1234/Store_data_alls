text=input()
sum=0
for i in range(len(text)):
    if text[i].upper()=="A":
        sum+=10
    elif text[i].upper()=="B":
        sum+=5
    elif text[i].upper()=="C":
        sum+=3
print(sum)