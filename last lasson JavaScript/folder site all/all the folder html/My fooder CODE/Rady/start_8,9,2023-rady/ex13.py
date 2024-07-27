# Ex 13
    # Check which even number in string
    # 1- "10 7 9 3" => number: 10
    # 2- "3 40 8 2" => number: 40, 8 , 2
# 
text=input()
resuld=""
sum=""
for i in range(len(text)):
    if text[i] !=" ":
        resuld+=text[i]
    elif int(resuld) % 2 ==0:
        sum+=resuld + ","
        resuld=""
    else:
        resuld=""
if int(resuld)%2==0:
    sum+=resuld
print(sum)
