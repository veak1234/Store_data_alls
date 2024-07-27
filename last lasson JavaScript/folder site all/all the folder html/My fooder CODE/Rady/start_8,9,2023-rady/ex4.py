text=input()
sum1=0
sum2=0
for i in range(len(text)):
    if text[i].isnumeric():
        sum2+=1
    else:
        sum1+=1
print(str(sum1) + "letter and" +str(sum2) + "number")
