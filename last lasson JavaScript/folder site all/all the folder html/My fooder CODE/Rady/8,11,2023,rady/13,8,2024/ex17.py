
# reverseString (“ronan”) 🡪   “nanor”

def reverseString(word):
    result = ""
    lastIndex = len(word) - 1
    for i in range(len(word)):
        result += word[lastIndex - i]
    return result
print(reverseString("Hello PNC"))
print(reverseString("Welcome 2021"))