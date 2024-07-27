
# value=int(input())
# min=int(input())
# max=int(input())
# result=""
# if value<max and value > min:
#     result="True"
# else:
#     result="False"
# print(result)

def isValueRange(value,min,max):
    result=""
    if value<max and value > min:
        result="True"
    else:
        result="False"
    return result
value=int(input())
min=int(input())
max=int(input())
print(isValueRange(value,min,max))