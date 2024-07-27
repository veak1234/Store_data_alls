resuld=""
isA=False
while not isA:
    number=int(input())
    if number==68:
        resuld="YOU WON!"
        isA=True        
    else:
        resuld="ENTER NUMBER AGAIN"
        isA=True
print(resuld)
