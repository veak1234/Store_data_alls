
def power(integer1,integer2):
    sum=1
    if integer1>integer2:
        sum=0
    while integer1<=integer2:
        sum = sum*integer1
        integer1+=1
    return sum
print(power(4,6))
