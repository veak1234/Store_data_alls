# Ex3 - Dictionary or object
fruit_stock = [
  {'name': 'banana', 'quality': 30},
  {'name': 'coconut', 'quality': 10},
  {'name': 'mango', 'quality': 20},
  {'name': 'orange', 'quality': 42},
  {'name': 'apple', 'quality': 25},
]
#1 - Update orange quality to 100
# for value in fruit_stock:
#     if value['name']== 'orange':
#         value['quality']=100
# print(fruit_stock)

# --------------------------------------------

#2 - Count the quality of fruit in stock
# count=0
# for key in fruit_stock:
#     count+=key['quality']
# print(count)

# -----------------------------------------------

#3 - Which fruit have less in stock
# count=""
# minAge=fruit_stock[0]['quality']
# for student in fruit_stock:
#     if student['quality']< minAge:
#         minAge=student['quality'] 
#         studentName=student['name']
# print(studentName,' quality' , minAge)

# --------------------------------------------------

#4 - Which fruit has the most in stock
count=""
minAge=fruit_stock[0]['quality']
for student in fruit_stock:
    if student['quality'] >= minAge:
        minAge=student['quality'] 
        studentName=student['name']
print(studentName,' quality' , minAge)
