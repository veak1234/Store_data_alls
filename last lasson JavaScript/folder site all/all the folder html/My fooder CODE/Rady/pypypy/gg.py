# number = int(input())
# mode = input()
# iscorrect= number>0 and number<11 and mode == "inside"
# isgreater= number<1 or number>10 and mode =="outside"
# if iscorrect:
#     print("True")
# elif isgreater:
#     print("True")
# else:
#     print("False")
#ex 
# word = input()
# n = len(word)
# for i in range(n):
#     print(word)
#     word=word[:-1]

# ex 4
# n = int(input())
# for i in range(n):
#     print("Hello")

# ex 5
# sum = 0
# n1 = int (input())
# n2 = int (input())
# sum = n1 + n2
# print("result:" ,sum)

# ex 6
# sum = 0 
# n1 = int(input())
# n2 = int(input())
# sum = n1*n2
# print("result:",sum)

#ex 7
# sum = 0
# n1 = int(input())
# sum = n1 * n1
# print("result:" ,sum)

# ex 8
# n = int(input())
# if n %2 == 0:
#     print("Even number")
# else:
#     print("Odd number")


# ex 
# number = int(input())
# if number < 0:
#     print("Negative number")
# elif number > 0:
#     print("Positive numnber")
# else:
#     print("Center number")

#ex 10
# text = len(input())
# for i in range(text):
#     print(i)

# ex 11
# text = input()
# for i in range(len(text)):
#     print(text[i])

# ex 12
# text = input()
# result = ""
# for i in range(len(text)):
#     result += "M"
# print(result)


# ex 13
# text = input()
# result = 0
# for i in range(len(text)):
#     if text[i] == "a" or text[i] == "A":
#         result += 1
# if result > 0:
#         print(str(result) + "A in text")
# else:
#     print("A Not found")

# ex 14
# N1= int(input())
# N2 = int(input())
# while N1 < N2 -1 :
#     N1 += 1
#     print(N1)

# ex 15
# N1 = int(input()) 
# N2 = int(input()) 
# N3 = int(input()) 
# if N1 > N2 and N1 >N3 :
#     print(str(N1) + "bigger than other" )
# elif N2 > N3 and  N2 > N1 :
#     print(str(N2) + "bigger than other")
# else:
#     print(str(N3) + "bigger than other")

 #ex 16
# sum = 0
# for i in range(5):
#     n = int(input())
#     sum += n
# print("sum:" +str(sum))

#ex 17
# isseven = False
# while not isseven:
#     n = int(input())
#     if n == 7:
#         isseven = True
# print("Good bye !")

# ex 18
# isseven = False
# while not isseven:
#     n = int(input())
#     if n == 7 :
#         isseven = True
#     else:
#         print("Try again !")  
# print("Good bey !")

#ex 19
# n= int(input())
# result = ""
# for i in range(n):
#     for j in range(i+1):
#         result +="X"
#     result +="\n"
# print(result)

# ex 20
# n = int(input())
# result = ""
# for i in range(n):
#     for j in range(n-i):
#         result +="X"
#     result += "\n"
# print(result)

# ex 21
# text = input()
# textlenght = len(text)
# result =""
# for i in range(textlenght):
#     if text[i]=='a':
#         result +="*"
#     else:
#         result += text[i]
# print(result)

#ex 22
# text = input()
# textlenght = len(text)
# result =""
# for i in range(textlenght):
#     if text[i]=='a':
#         result +="*"
#     elif text[i]=='b':
#         result=="#"
#     else:
#         result += text[i]
# print(result)

#ex 23
# text = input()
# txt = text [::-1]
# print(txt)

#ex 23
# text = input()
# textlength = len(text)-1
# result = ""
# for i in range(len(text)):
#     result += text[textlength -i]
# print(result)


# ex 24
# text = input()
# txt= text.upper()
# print(txt)

#ex 25
# text = input()
# texrlenght = len(text)
# count = 0
# for i in range(texrlenght):
#     if text[i]== text [i].upper():
#         count += 1
# if count > 0:
#         print(str(count) + " uppercase letter ")
# else :
#      print("No uppercase letter")

#ex 26
# text = "123"
# result = ""
# for i in range(len(text)):
#     for j in range(int(text[i])):
#         result += "a"
#     result += "b"
# print(result)

# ex 27
# text = "123"
# result = ""
# for i in range(len(text)):
#     for j in range(int(text[i])):
#         result += "a"
#         for k in range(2):
#             result += "b"
#     result += "c"
# print(result)

#EX 1
# m1 = int(input())
# m2 = int(input())
# m3 = int(input())
# if m3 > m1 and m3 < m2:
#     print("Valid")
# else:
#     print("Invalid")

# ex 2
# text = input()
# textlist = "abcdefghijklmnopuvwxyz"
# i=0
# isfound = False
# while i < len(textlist) and not isfound:
#     if textlist[i] == text:
#         isfound = True
#         print(i + 1)
#     i += 1
#     print("go...")
    
# ex 3
# n = int(input())
# factorial = 1
# resuld = ""
# for i in range(n):
#     number = i + 1
#     factorial = factorial * number
#     if i ==n -1:
#         resuld += str(number)
#     else:
#         resuld+=str(number)+"x"
# print(resuld + "=" + str(factorial))

#ex 4
# user1 = input()
# user2 = input()
# if len(user1) > len(user2):
#     print(user1 + " has more letter than "+ user2)
# elif len(user1) < len(user2):
#     print(user1 + " has more letter than" + user2)
# else:
#     print(user1 + " has more letter than " + user2)

# ex 5
# text = input()
# index = None
# for i in range(len(text)):
#     if text[i]=="7":
#         index = i
# print(i)

#ex 6
# text = input()
# n = len(text)
# iscrrect = False
# i = 0
# while i < n and not iscrrect:
#     if text[i] =="7":
#         iscrrect=True
#         print(i)
#     i += 1

# ex 6
# userinput = input()
# index = None
# isSeven = False
# for i in range(len(userinput)):
#     if userinput[i]=="7" and not isSeven:
#         index = i
#         isSeven = True
# print(index)

# ex 7
# text=input()
# result=""
# isA=False
# for i in range(len(text)):
#     if i==len(text)-1:
#         if i==len(text)-1 and text[i] !="?" and text[i] !="." and text[i] !=" " and text[i] !="!":
#             result+=text[i]
#         if result.upper()=="RADY":
#             isA=True
#         result+=""
#     else:
#         if text[i]!="?" and text[i] !="." and text[i] !="?" and text[i] !=" ":
#             result+=text[i]
# if isA :
#     print("yes")
# else:
#     print("No")

# i=0
# isA = False
# while i<3 and not isA:
#     number=int(input())
#     if number >=1 and number<=10:
#         isA=True
#     elif number >=30 and number <= 50 :
#         isA=True
#     elif number >=77 and number <= 100 :
#         isA=True
#     i+=1
# if isA:
#     print("BETWEEN")
# else:
#     print("NOT BETWEEN")

# text="goodMorning"
# isFirstO=False
# result=""
# i=0
# while i<len(text) and not isFirstO:
#     if text[i]=="O" or text[i]=="o":
#         isFirstO=True
#         result= text[:4]
#     i+=1
#     print(result)

# text="goodMorning"
# print(text[:4])

# word = input()
# pos = 0
# sum = 0
# while pos < len(word) and int(word[pos]) < 7:
#     sum += int(word[pos])
#     pos += 1
# print(sum)

# number=int(input())
# sum=0
# for i in range(number):
#     sum+=1
#     print(sum)

# i=0
# result=""
# isStop=False
# while i!='end' and not isStop :
#     n=input()
#     if n!='end':
#         if int(n)%2==0:
#             result+=n
#             result+=":"
#     elif n=='end':
#         isStop=True
# print(result)     

# text = input()
# result = -1
# for index in range(len(text)):
#     letter = text[index]
#     if letter == "K" and text[index + 1] == "K":
#         result = index
# print(result) 

text=input()
isStop=False
isnumber=False
result=""
result1=""
sum=0
for i in range(len(text)):
    if text[i]!=";" and not isStop:
        result+=text[i]
    elif text[i]==";":
        isStop=True
    elif isStop:
        result1+=text[i]
    if result.isnumeric() and result1.isnumeric():
        isnumber=True
        sum= int(result)+int(result1)
if isnumber:
    print(sum)
else:
    print("Worng Format")

# text=input()
# result=""
# for i in range(len(text)-1):
#     if text[i]=="a" and text[i+1]=="b":
#         result="Yes"
#     else:
#         result="No"
# print(result)
