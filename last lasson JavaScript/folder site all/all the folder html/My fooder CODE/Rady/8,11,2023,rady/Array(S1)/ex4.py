
def getIndexMinNumber(Array):
    max=Array[0]
    for i in range(len(Array)):
        # if Array[i]<max:
            max+=Array[i]
    return max
print(getIndexMinNumber([1,2,2,3,4]))
