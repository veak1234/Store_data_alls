studentRecord = [
    {"studentName":"Seyla","class":"wep-a","algorithm":98,"html":90},
    {"studentName":"seyha","class":"wep-b","algorithm":80,"html":90},
    {"studentName":"Villa","class":"wep-a","algorithm":96,"html":92},
    {"studentName":"mengheang","class":"wep-a","algorithm":66,"html":54},
]
sum=0
scon=0
for student in studentRecord:
    if student['class']=="wep-a":
        sum+=1
        scon+=student["algorithm"]
print(scon/sum)
