
// ------------------------------------------------------------------------------
//	EXERCICE 1 
// ------------------------------------------------------------------------------
// Input to test
let ex1_testtext =[]
let ex1_testCase2 =[22, 33, 4, 2]
let ex1_testCase3 =[22, 33, 44, -22]
let ex1_testCase4 =[21, 33, 44, 66]


// Write your code here
if (ex1_testCase4.length==0){
	console.log("This array is empty")
}
else{
	let valid=true
	for(number of ex1_testCase4){
		if (number <10 && valid){
			valid=false
		}
	}
	if (valid){
		console.log("Valid array");
	}
	else{
		console.log("Invalid array")
	}
}


// ------------------------------------------------------------------------------
//	EXERCICE 2 
// ------------------------------------------------------------------------------
// Input to test
let text = "hello! welcome to web programing at pnc"
let ex2_testCase2 = "him is cute girl"
let ex2_testCase3 = ""


// Write your code here
let words = ""
array = []
isTrue=true
for (let index in text){
	if(text[index]!="w" && index == 0){
		words+=text[index].toUpperCase()
	}
	else if (text[0]=="w" || text[index-1] ==" " && text[index]=="w"){
		isTrue=false
	} 
	else if(text[index-1]==" " && text[index]!= "w"){
		words+=text[index].toUpperCase()
		isTrue=true
	}
	else if (text[index]!=" " && isTrue){
		words+=text[index]
	}
	else if (text[index] == " " && words !=""){
		array.push(words)
		words=""
	}
	if (index == (text.length)-1){
		array.push(words)
	}
}
console.log(array)
// ------------------------------------------------------------------------------
//	EXERCICE 3
// ------------------------------------------------------------------------------

// Input to test

let ex3_testtext = [2.2, 23.4, 3, 33, 10, 50, 90]
let ex3_testCase2 = [2, 1, 2, 3.45, 78.3]
let ex3_testCase3 = [2, 1, 3, 4]


// Write your code here
let result = []
for (value of ex3_testtext){
	if((value%2==0) || (value%2==1)){
		result.push(value)
	}
}
console.log(result)

// ------------------------------------------------------------------------------
//	EXERCICE 4
// ------------------------------------------------------------------------------

// Input to test
let students = ["Romdul", "RomChong", "Kolap"]
let countries = ["Canada", "Cambodia", "Thai"]
let majors = ["SNA", "WEB", "Database"]

// Write your code here
let arrayDic= []
for(let i=0;i<students.length;i++){
	list={student:students[i],country:countries[i],major:majors[i]}
	arrayDic.push(list)
}
console.log(arrayDic)
