resuld=""
for i in range(5):
    number=int(input())
    if number>=10 and number<=30:
        resuld="NOW"
    else:
        resuld="LOST"
print(resuld)