# We have a program to display the absolute value of a number (ex: getAbsolute(-5) = 5)

def getAbsolute(number):
    resuld=number
    if number < 0:
        resuld= -1 * number
    return resuld
print(getAbsolute(1) + 10)
