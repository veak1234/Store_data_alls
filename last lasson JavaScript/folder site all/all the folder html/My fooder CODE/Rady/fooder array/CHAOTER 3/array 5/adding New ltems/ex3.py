# Ex1 - Dictionary or object


studentList=[
  {'id': 1, 'name': 'dara', 'age': 20},
  {'id': 2, 'name': 'kaka', 'age': 20},
  {'id': 3, 'name': 'bopha', 'age': 12},
  {'id': 4, 'name': 'chompa', 'age': 40},
  {'id': 5, 'name': 'chompey', 'age': 30},
  {'id': 6, 'name': 'romdul', 'age': 60},
]
#1 - who is younger in list
# studentName=""
# minAge=studentList[0]['age']
# for student in studentList:
#     if student['age']< minAge:
#         minAge=student['age'] 
#         studentName=student['name']
# print(studentName,' age ' , minAge)

# ----------------------------------------------------------

#2 - who  is older in list
# studentName=""
# minAge=studentList[0]['age']
# for student in studentList:
#     if student['age']>= minAge:
#         minAge=student['age'] 
#         studentName=student['name']
# print(studentName,' age ' , minAge)

# --------------------------------------------------------------

#3 - how many student has the same age
# sum=0
# studentName=""
# minAge=studentList[0]['age']
# for student in studentList:
#     if student['age']== minAge:
#         sum+=1
#         minAge=student['age'] 
#         studentName=student['name']
#         print(sum, studentName,' age ' , minAge)

# ------------------------------------------------------------

#4 - how many student older than "kaka"
# sum=0
# studentName=""
# minAge=studentList[0]['age']
# for student in studentList:
#     if student['age'] > minAge:
#         sum+=1
# print('student older than kaka have: ', sum)

# ------------------------------------------------------------

#5 - remove student name "romdul" from the lis
# index=None
# for i in range(len(studentList)):
#     if studentList[i]['name']=='romdul':
#         index=i
# studentList.pop(index)
# print(studentList)