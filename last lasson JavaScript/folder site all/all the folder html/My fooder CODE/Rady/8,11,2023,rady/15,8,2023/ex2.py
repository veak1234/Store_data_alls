def multiply(n1,n2):
    return n1*n2
def productFromTo(startNumber,endNumber):
    total=1
    while startNumber<=endNumber:
        total=multiply(startNumber,total)
        startNumber+=1
    return total
startNumber=int(input("start Number: "))
endNumber=int(input("end Number: "))
print(productFromTo(startNumber,endNumber))
