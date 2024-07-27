
# Arrays=[1,-2,3,4,-5]
# sum=0
# for i in range(len(Arrays)):
#     if Arrays[i] < 0:
#         sum+=1
# print(sum)

def countNegNum(Array):
    count=0
    for i in range(len(Array)):
        if Array[i] < 0:
            count+=1
    return count
number=[-1,3,-4,-2,-2]
print("Enter: " + str(countNegNum(number)))

