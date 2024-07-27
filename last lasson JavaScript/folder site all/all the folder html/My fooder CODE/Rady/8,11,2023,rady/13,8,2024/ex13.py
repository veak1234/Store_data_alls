
# Return ‘Good’ is the grade is greater than 10 
# Return ‘Bad’ is the grade is less or equal than 10 

def getComment(grade):
    result=""
    if grade > 10:
        result= "Good"
    return result
print(getComment(11))
