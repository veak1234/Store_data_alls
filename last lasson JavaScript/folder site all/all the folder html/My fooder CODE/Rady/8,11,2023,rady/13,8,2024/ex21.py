
# input:yen yon
# output:Yen yoN

def first(word):
    result=""
    for i in range(len(word)):
        if i==0 or i==len(word)-1:
            result+=word[i].upper()
        else:
            result+=word[i]
    return result
print(first("yen yon"))
