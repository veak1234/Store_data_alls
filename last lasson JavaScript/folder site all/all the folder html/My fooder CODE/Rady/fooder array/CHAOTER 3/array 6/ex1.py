# def findPositionOfstrar(arr):
#     index=None
#     for i in range(len(arr)):
#         if arr[i]=="*":
#             index=i
#     return index
# arr = ['0', '0', '*', '0', '0', '0', '0']
# strartAction=True
# while strartAction:
#     currentPosition=findPositionOfstrar(arr)
#     coummand=input("Ender coummand: ")
#     if coummand.lower()=="l" and currentPosition > 0:
#         arr[currentPosition]='0'
#         arr[currentPosition -1]='*'
#     elif coummand.lower()=="r" and currentPosition < len(arr)-1:
#         arr[currentPosition]='0'
#         arr[currentPosition +1]='*' 
#     elif currentPosition == 0:
#         print("Please go left")
#     elif currentPosition ==len(arr)-1:
#         print("Please go right")
#     else:
#         if coummand.lower()=="stop":
#             strartAction = False
#             print("Action has been stoped...")
#         else:
#             print("Unknow " + coummand + " coummand")
    # print(arr)

