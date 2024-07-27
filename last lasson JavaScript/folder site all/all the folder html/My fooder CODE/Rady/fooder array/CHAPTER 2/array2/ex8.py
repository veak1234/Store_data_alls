# Ex9
# From list of array 2D

#1 - How many letter "A" from array 2D (function)

# def countA(word):
#     count=0
#     for letter in word:
#         if letter.upper()=="A":
#             count+=1
#     return count
# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# counter = 0
# for fruitlist in fruits:
#     for fruit in fruitlist:
#         counter+=countA(fruit)
# print(counter)

# ----------------------------------------------------------------------

# def countNumber(arr):
#     count = 0
#     for i in range(len(arr)):
#         for j in range(len(arr[i])):
#             if arr[i][j] == "A" or arr[i][j] == "a":
#                 count += 1
#     return count

# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# counter = 0
# for array in fruits:
#     counter += countNumber(array)
# print(counter)


# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#2 - How many banana in list (function)
# def countFruit(fruits,fruit_nume):
#     count = 0
#     for fruit in fruits:
#         if fruit.lower()==fruit_nume.lower():
#             count+=1
#     return count
# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# counter=0
# for fruitlist in fruits:
#     counter +=countFruit(fruitlist,"Banana")
# print(counter)

# --------------------------------------------------------

#3 - How many mango in list (function)
# def countFruit(fruits,fruit_nume):
#     count = 0
#     for fruit in fruits:
#         if fruit.lower()==fruit_nume.lower():
#             count+=1
#     return count
# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# counter=0
# for fruitlist in fruits:
#     counter +=countFruit(fruitlist,"mango")
# print(counter)

# ------------------------------------------------------------

#4 - How many orange in list (function)
# def countFruit(fruits,fruit_nume):
#     count = 0
#     for fruit in fruits:
#         if fruit.lower()==fruit_nume.lower():
#             count+=1
#     return count
# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# counter=0
# for fruitlist in fruits:
#     counter +=countFruit(fruitlist,"orange")
# print(counter)

# --------------------------------------------------------------------

#5 - Replace mango by # sign (function)
# fruits = [
#   ['banana','coconut','mango'],
#   ['jackfruit','banana','mango'],
#   ['papaya','apple','orange'],
#   ['mango','orange','Mango'],
#   ['banana','mango','orange']
# ]
# for fruitList in fruits:
#     for i in range(len(fruitList)):
#         if fruitList[i].lower()== "mango":
#             fruitList[i]="#"
# print(fruits)
