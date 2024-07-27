text=input()
sum=0
sum1=0
for i in range(len(text)):
    if text[i].isupper():
        sum+=1
    else:
        sum1+=1
print(sum,"uppercase and",sum1,"lowercase")