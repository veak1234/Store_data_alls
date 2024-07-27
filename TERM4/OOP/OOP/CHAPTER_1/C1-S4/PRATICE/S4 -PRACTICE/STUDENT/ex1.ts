
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions
*/
type Person={
  name:string,
  nationality:string,
  salary:string
}
// Object 1 
type Person1={
  name:string,
  nationality:string,
  salary:number
}
// Object 2
type Person2={
  name:string,
  nationality:string,
  salary:number
}

function getName(person:Person):string {
  return person.name;
}

function sumSalaries(person1:Person1, person2:Person2):number | string {
  return person1.salary + person2.salary;
}

function isFrench(person:Person):boolean {
  return person.nationality == "French";
}

let person={name:"sal",nationality:"French",salary:"1000"}
let person1={name:"Olivia",nationality:"England",salary:300}
let person2={name:"sal",nationality:"French",salary:250}

console.log(getName(person))
console.log(isFrench(person))
console.log(sumSalaries(person1, person2))
