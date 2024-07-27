
# Ex4 Array 2D
arr = [
  ['banana', 'mango', 'mango', 'Jackfruit'],
  ['orange', 'coconut', 'banana', 'papaya'],
  ['apple', 'orange', 'mango', 'coconut'],
  ['mango', 'coconut', 'banana', 'papaya'],
  ['banana', 'apple', 'orange', 'coconut'],
]
#1 - How many fruit in list
# cond = 0
# for i in range(len(arr)):
#     resuld = arr[i]
#     for j in range(len(resuld)):
#         cond += 1
# print(cond)


#2 - How many mango, orange, banana, coconut
# cond1 = 0
# cond2 = 0
# cond3 = 0
# cond4 = 0
# for i in range(len(arr)):
#     resuld = arr[i]
#     for j in range(len(resuld)):
#         if resuld[j] == 'mango':
#             cond1 += 1
#         elif resuld[j]== 'orange':
#             cond2 += 1
#         elif resuld[j]== 'banana':
#             cond3 +=1
#         elif resuld[j]== 'coconut':
#             cond4 += 1
#     sum = cond1+cond2+cond3+cond4
# print(' sumNumber All =',sum,'\n','mango =',str(cond1),'\n','orange =',str(cond2),'\n','banana =',str(cond3),'\n','coconut =',str(cond4))


#3 - How many letter "o" in list
# sum = 0
# for i in range(len(arr)):
#     resuld1 = arr[i]
#     for j in range(len(resuld1)):
#         resuld2 = resuld1[j]
#         for k in range(len(resuld2)):
#             if resuld2[k].lower() == 'o':
#                 sum += 1
# print(sum)


#4 - How many fruits has 6 character
# ------------------------------