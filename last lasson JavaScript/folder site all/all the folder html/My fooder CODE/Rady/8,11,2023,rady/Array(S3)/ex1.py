

def isEqual(Array,Array1):
    for i in range(len(Array)):
        if len(Array)==len(Array1):
            result="EQUAL"
        else:
            result="NOT EQUAL"
    return result
Array = eval(input("Enter : "))
Array1 = eval(input("Enter : "))        
print(isEqual(Array,Array1))

# ===========================================================

# def isEqual(Array,Array1):
#     i=0
#     isFound=True
#     while i < len(Array1) and isFound:
#         if Array[i]!=Array1[i]:
#             isFound=False
#             i+=1
#     return isFound
# Array =[2, 9, 7, 6, 7]
# Array1 =[2, 9, 7, 6, 7]    
# if len(Array)==len(Array1):
#     isCorrect=isEqual(Array,Array1)   
#     if not isCorrect:
#         print("NOT equal")
#     else:
#         print("Equal")
# else:
#     print("NOT EQUAL")