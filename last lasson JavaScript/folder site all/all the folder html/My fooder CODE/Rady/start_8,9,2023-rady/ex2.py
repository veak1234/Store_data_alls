# ex2
text=input()
sum=0
for i in range(len(text)):
    if text[i]!="7" and text[i]!="9":
        sum+=int(text[i])
print(sum)