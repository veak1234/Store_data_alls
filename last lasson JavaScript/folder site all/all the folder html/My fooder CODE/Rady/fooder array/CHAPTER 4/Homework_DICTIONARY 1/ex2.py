# Ex2 - Dictionary or object
studentList = [
  {'id': 1,'name':'dara','score': 90,'province':'Phnom Penh'},
  {'id': 2,'name':'kaka','score': 60,'province':'Ratanakiri'},
  {'id': 3,'name':'bopha','score': 42,'province':'Siem Riep'},
  {'id': 4,'name':'chompa','score': 40,'province':'Battambang'},
  {'id': 5,'name':'chompey','score': 25,'province':'Siem Riep'},
  {'id': 6,'name':'romdul','score': 50,'province':'Kratie'},
]

#1 - who is come from "Battambang" ?
# studentName=""
# for student in studentList:
#     if student['province']=='Battambang':
#         minAge=student['province'] 
#         studentName=student['name']
# print(studentName,'province' , minAge)

# ----------------------------------------------------------

#2 - How many student come from "Siem Riep"?
# studentName=""
# sum=0
# for student in studentList:
#     if student['province']=='Siem Riep':
#         sum+=1
#         minAge=student['province'] 
#         studentName=student['name']
#         print(sum,studentName,'province' , minAge)

# -----------------------------------------------------------------

#3 - How many student has score below 50?
# sum=0
# for student in studentList:
#     if student['score'] < 50:
#         sum+=1
# print('student older than kaka have: ', sum)

# ---------------------------------------------------------------

#4 - Who get highest score in list
# studentName=""
# minAge=studentList[0]['score']
# for student in studentList:
#     if student['score'] == minAge:
#         minAge=student['name'] 
#         studentName=student['score']
# print( minAge,' score ' ,studentName)

# ------------------------------------------------------------------------

#5 - Who get lowest score in list
# studentName=""
# minAge=studentList[0]['score']
# for student in studentList:
#     if student['score']< minAge:
#         minAge=student['score'] 
#         studentName=student['name']
# print(studentName,' score' , minAge)

# -------------------------------------------------------------------

#6 - Remove who come from "Battambang" from list
# index=None
# for i in range(len(studentList)):
#     if studentList[i]['province']=='Battambang':
#         index=i
# studentList.pop(index)
# print(studentList)
