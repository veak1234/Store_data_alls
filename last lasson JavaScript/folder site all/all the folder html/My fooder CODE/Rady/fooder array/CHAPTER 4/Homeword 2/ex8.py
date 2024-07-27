# Ex8 - Dictinary
# listFruit = [
#   {'name': 'banana', 'price': 10, 'location': 'cambodia'},
#   {'name': 'coconu', 'price': 30, 'location': 'Thailand'},
#   {'name': 'Jackfruit', 'price': 90, 'location': 'India'},
#   {'name': 'orange', 'price': 20, 'location': 'Singapore'},
#   {'name': 'Orange', 'price': 8, 'location': 'USA'},
# ]
#1 - Find average of fruit price
# sum=0
# for key in listFruit:
#     res=key['price']
#     sum+=res
# print(sum/len(key))

# --------------------------------------------------------------------

#2 - How many fruit type in list
# listFruit = [
#   {'name': 'banana', 'price': 10, 'location': 'cambodia'},
#   {'name': 'coconu', 'price': 30, 'location': 'Thailand'},
#   {'name': 'Jackfruit', 'price': 90, 'location': 'India'},
#   {'name': 'orange', 'price': 20, 'location': 'Singapore'},
#   {'name': 'Orange', 'price': 8, 'location': 'USA'},
# ]
# res = 0
# for key in listFruit:
#   res += 1
# print(res)
    
# ---------------------------------------------------------------------

#3 - Which country has highest price of fruit
# listFruit = [
#   {'name': 'banana', 'price': 10, 'location': 'cambodia'},
#   {'name': 'coconu', 'price': 30, 'location': 'Thailand'},
#   {'name': 'Jackfruit', 'price': 90, 'location': 'India'},
#   {'name': 'orange', 'price': 20, 'location': 'Singapore'},
#   {'name': 'Orange', 'price': 8, 'location': 'USA'},
# ]
# result=''
# minAge=listFruit[0]['price']
# for key in listFruit:
#     if key['price'] > minAge:
#       minAge=key['price']
#       result=key['location']

# print(result,' = ',minAge)

# ------------------------------------------------------------------

#4 - Which fruti has price lower than 30$
# ['banan','orange']
# listFruit = [
#   {'name': 'banana', 'price': 10, 'location': 'cambodia'},
#   {'name': 'coconu', 'price': 30, 'location': 'Thailand'},
#   {'name': 'Jackfruit', 'price': 90, 'location': 'India'},
#   {'name': 'orange', 'price': 20, 'location': 'Singapore'},
#   {'name': 'Orange', 'price': 8, 'location': 'USA'},
# ]
# sum=0
# result=''
# minAge=listFruit[0]['price']
# for key in listFruit:
#     if key['price'] < 30:
#       result=key['name']
#       print(result.upper(),'HAVE',key['price'])

# ------------------------------------------------------------------------------------

#5 - Which fruit name from Cambodia?
# listFruit = [
#   {'name': 'banana', 'price': 10, 'location': 'cambodia'},
#   {'name': 'coconu', 'price': 30, 'location': 'Thailand'},
#   {'name': 'Jackfruit', 'price': 90, 'location': 'India'},
#   {'name': 'orange', 'price': 20, 'location': 'Singapore'},
#   {'name': 'Orange', 'price': 8, 'location': 'USA'},
# ]
# result=''
# index=listFruit[0]['location']
# for key in listFruit:
#     if key['location']==index:
#       res=key['name']
#       result=key['location']
# print(res,'in',result)

