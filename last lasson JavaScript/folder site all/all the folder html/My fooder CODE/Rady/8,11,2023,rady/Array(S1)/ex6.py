
text=input()
result=""
i=0
isA=True
while isA and i<len(text):
    if text[i].upper()=="A":
        result="HAS-A"
        isA=False
    else:
        result="HAS-NOT-A"
    i+=1
print(result)

