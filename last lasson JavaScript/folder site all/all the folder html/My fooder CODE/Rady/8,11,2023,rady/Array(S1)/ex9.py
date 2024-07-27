
# frgiomklli
# 3

def contof(string):
    sum=0
    for i in range(len(string)):
        if string[i]=="f" and string[i+1]=="r":
            sum+=1
        elif string[i]=="o" and string[i+1]=="m":
            sum+=1
        elif string[i]=="l" and string[i+1]=="i":
            sum+=1
    return sum
text=input()
print(contof(text))