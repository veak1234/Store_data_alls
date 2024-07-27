
# 1.How to Remove number From a String in Python
# Input:yon12rady23him2
# output:yonradyhim

# note:you can you text[i].isnumeric() to check is number ot not.

def number(word):
    result=""
    for i in range(len(word)):
        if not word[i].isnumeric():
            result+=word[i]
    return result
print(number("yon12rady23him2"))